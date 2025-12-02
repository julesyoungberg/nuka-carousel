import { ScrollMode } from './types';
export declare const getIndexes: (slide: number, endSlide: number, count: number) => [number, number];
export declare const addEvent: (elem: Window | Document, type: string, eventHandler: EventListener) => void;
export declare const removeEvent: (elem: Window | Document, type: string, eventHandler: EventListener) => void;
export declare const getNextMoveIndex: (scrollMode: ScrollMode, wrapAround: boolean, currentSlide: number, count: number, slidesToScroll: number, slidesToShow: number) => number;
export declare const getPrevMoveIndex: (scrollMode: ScrollMode, wrapAround: boolean, currentSlide: number, slidesToScroll: number) => number;
/**
 * Returns a multiplier for adjusting carousel behavior based on layout direction.
 * In RTL (right-to-left) layouts, returns -1 to invert drag and translation directions.
 * In LTR (left-to-right) layouts, returns 1 to maintain default behavior.
 * @returns {number} -1 for RTL mode, 1 for LTR mode
 */
export declare const rtlMultiplier: () => number;
//# sourceMappingURL=utils.d.ts.map