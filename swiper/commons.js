// Other variants are not probably transpiled!
import _Swiper from 'swiper/dist/js/swiper.min.js';

import 'swiper/dist/css/swiper.min.css';

// http://idangero.us/swiper/api/#events
export const DEFAULT_EVENTS = [
    'beforeDestroy',
    'slideChange',
    'slideChangeTransitionStart',
    'slideChangeTransitionEnd',
    'slideNextTransitionStart',
    'slideNextTransitionEnd',
    'slidePrevTransitionStart',
    'slidePrevTransitionEnd',
    'transitionStart',
    'transitionEnd',
    'touchStart',
    'touchMove',
    'touchMoveOpposite',
    'sliderMove',
    'touchEnd',
    'click',
    'tap',
    'doubleTap',
    'imagesReady',
    'progress',
    'reachBeginning',
    'reachEnd',
    'fromEdge',
    'setTranslate',
    'setTransition',
    'resize'
]

export const Swiper = _Swiper
