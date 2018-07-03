import { Swiper, DEFAULT_EVENTS } from './commons'

export const swiperDirectiveFactory = globalOptions => {

    // Get swiper instace name in directive
    const getInstanceName = (el, binding, vnode) => {
        let instanceName = null
        if (binding.arg) {
            instanceName = binding.arg
        } else if (vnode.data.attrs && (vnode.data.attrs.instanceName || vnode.data.attrs['instance-name'])) {
            instanceName = (vnode.data.attrs.instanceName || vnode.data.attrs['instance-name'])
        } else if (el.id) {
            instanceName = el.id
        }
        return instanceName || 'swiper'
    }

    return {

        // Init
        bind(el, binding, vnode) {
            const self = vnode.context
            if (el.className.indexOf('swiper-container') === -1) {
                el.className += ((el.className ? ' ' : '') + 'swiper-container')
            }
        },

        // DOM inserted
        inserted(el, binding, vnode) {
            const self = vnode.context
            const options = binding.value
            const instanceName = getInstanceName(el, binding, vnode)
            let swiper = self[instanceName]

            // Emit event in Vue directive
            const eventEmit = (vnode, name, data) => {
                const handlers = (vnode.data && vnode.data.on) ||
                    (vnode.componentOptions && vnode.componentOptions.listeners)
                if (handlers && handlers[name]) handlers[name].fns(data)
            }

            if (!swiper) {
                const swiperOptions = Object.assign({}, globalOptions, options)
                swiper = self[instanceName] = new Swiper(el, swiperOptions)
                DEFAULT_EVENTS.forEach(eventName => {
                    swiper.on(eventName, function () {
                        eventEmit(vnode, eventName, ...arguments)
                        eventEmit(vnode, eventName.replace(/([A-Z])/g, '-$1'), ...arguments)
                    })
                })
            }

            eventEmit(vnode, 'ready', swiper)
        },

        // Parse options change
        componentUpdated(el, binding, vnode) {
            const instanceName = getInstanceName(el, binding, vnode)
            const swiper = vnode.context[instanceName]
            if (swiper) {
                swiper.update && swiper.update()
                swiper.navigation && swiper.navigation.update()
                swiper.pagination && swiper.pagination.render()
                swiper.pagination && swiper.pagination.update()
            }
        },

        // Destroy this directive
        unbind(el, binding, vnode) {
            const instanceName = getInstanceName(el, binding, vnode)
            const swiper = vnode.context[instanceName]
            if (swiper) {
                swiper.destroy && swiper.destroy()
                delete vnode.context[instanceName]
            }
        }
    }
}

export default swiperDirectiveFactory({})
