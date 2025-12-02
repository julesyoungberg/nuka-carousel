import { ScrollMode } from './types';

export const getIndexes = (
  slide: number,
  endSlide: number,
  count: number
): [number, number] => {
  let slideIndex = slide;
  let endSlideIndex = endSlide;

  if (slideIndex < 0) {
    slideIndex += count;
  } else if (slideIndex > count - 1) {
    slideIndex -= count;
  }

  if (endSlideIndex < 0) {
    endSlideIndex += count;
  } else if (endSlideIndex > count - 1) {
    endSlideIndex -= count;
  }

  return [slideIndex, endSlideIndex];
};

export const addEvent = (
  elem: Window | Document,
  type: string,
  eventHandler: EventListener
): void => {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandler, false);
  }
};

export const removeEvent = (
  elem: Window | Document,
  type: string,
  eventHandler: EventListener
): void => {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }
  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandler, false);
  }
};

export const getNextMoveIndex = (
  scrollMode: ScrollMode,
  wrapAround: boolean,
  currentSlide: number,
  count: number,
  slidesToScroll: number,
  slidesToShow: number
) => {
  if (
    !wrapAround &&
    scrollMode === ScrollMode.remainder &&
    count < currentSlide + (slidesToScroll + slidesToShow)
  ) {
    const remindedSlides =
      count - (currentSlide + slidesToScroll) - (slidesToShow - slidesToScroll);
    return currentSlide + remindedSlides;
  }
  return currentSlide + slidesToScroll;
};

export const getPrevMoveIndex = (
  scrollMode: ScrollMode,
  wrapAround: boolean,
  currentSlide: number,
  slidesToScroll: number
) => {
  if (
    !wrapAround &&
    scrollMode === ScrollMode.remainder &&
    currentSlide - slidesToScroll < 0
  ) {
    return 0;
  }

  return currentSlide - slidesToScroll;
};

/**
 * Returns a multiplier for adjusting carousel behavior based on layout direction.
 * In RTL (right-to-left) layouts, returns -1 to invert drag and translation directions.
 * In LTR (left-to-right) layouts, returns 1 to maintain default behavior.
 * @returns {number} -1 for RTL mode, 1 for LTR mode
 */
export const rtlMultiplier = (): number => {
  const isRTL = typeof document !== 'undefined' && document.dir === 'rtl';
  return isRTL ? -1 : 1;
};
