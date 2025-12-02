"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rtlMultiplier = exports.removeEvent = exports.getPrevMoveIndex = exports.getNextMoveIndex = exports.getIndexes = exports.addEvent = void 0;
var _types = require("./types");
var getIndexes = exports.getIndexes = function getIndexes(slide, endSlide, count) {
  var slideIndex = slide;
  var endSlideIndex = endSlide;
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
var addEvent = exports.addEvent = function addEvent(elem, type, eventHandler) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandler, false);
  }
};
var removeEvent = exports.removeEvent = function removeEvent(elem, type, eventHandler) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }
  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandler, false);
  }
};
var getNextMoveIndex = exports.getNextMoveIndex = function getNextMoveIndex(scrollMode, wrapAround, currentSlide, count, slidesToScroll, slidesToShow) {
  if (!wrapAround && scrollMode === _types.ScrollMode.remainder && count < currentSlide + (slidesToScroll + slidesToShow)) {
    var remindedSlides = count - (currentSlide + slidesToScroll) - (slidesToShow - slidesToScroll);
    return currentSlide + remindedSlides;
  }
  return currentSlide + slidesToScroll;
};
var getPrevMoveIndex = exports.getPrevMoveIndex = function getPrevMoveIndex(scrollMode, wrapAround, currentSlide, slidesToScroll) {
  if (!wrapAround && scrollMode === _types.ScrollMode.remainder && currentSlide - slidesToScroll < 0) {
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
var rtlMultiplier = exports.rtlMultiplier = function rtlMultiplier() {
  var isRTL = typeof document !== 'undefined' && document.dir === 'rtl';
  return isRTL ? -1 : 1;
};