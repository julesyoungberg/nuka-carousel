"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFrameHeight = void 0;
var _react = require("react");
var _useStateWithRef3 = require("./use-state-with-ref");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * The frame height is normally, just `auto` (i.e., it expands to fit the
 * items), but in adaptiveHeight mode, it's the height of the tallest visible
 * item.
 *
 * In adaptiveHeight mode, we also switch between two states to ensure that
 * slides don't render with zero height when server-side-rendering:
 *
 * - When initializedAdaptiveHeight is false: the frame has height auto; visible
 *   slides have height auto; invisible slides have height 0
 * - The client sets initializedAdaptiveHeight to true once we've measured all
 *   the visible slides' heights
 * - When initializedAdaptiveHeight is true: the frame has height set to the
 *   tallest visible slide; all slides have height 100%
 */
var useFrameHeight = exports.useFrameHeight = function useFrameHeight(_ref) {
  var adaptiveHeight = _ref.adaptiveHeight,
    slidesToShow = _ref.slidesToShow,
    numSlides = _ref.numSlides;
  var _useStateWithRef = (0, _useStateWithRef3.useStateWithRef)([]),
    _useStateWithRef2 = _slicedToArray(_useStateWithRef, 3),
    visibleHeights = _useStateWithRef2[0],
    setVisibleHeights = _useStateWithRef2[1],
    visibleHeightsRef = _useStateWithRef2[2];

  // Whether we've received heights of all initial visible heights
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    initializedAdaptiveHeight = _useState2[0],
    setInitializedAdaptiveHeight = _useState2[1];
  var handleVisibleSlideHeightChange = (0, _react.useCallback)(function (slideIndex, height) {
    // Use the ref's value since it's always the latest value
    var latestVisibleHeights = visibleHeightsRef.current;
    var newVisibleHeights;
    if (height === null) {
      // Remove the entry
      newVisibleHeights = latestVisibleHeights.filter(function (slideHeight) {
        return slideHeight.slideIndex !== slideIndex;
      });
    } else {
      // Replace the entry if it exists
      var foundSlide = false;
      newVisibleHeights = latestVisibleHeights.map(function (heightInfo) {
        if (heightInfo.slideIndex === slideIndex) {
          foundSlide = true;
          return {
            slideIndex: slideIndex,
            height: height
          };
        }
        return heightInfo;
      });

      // Add the height if it wasn't found
      if (!foundSlide) {
        newVisibleHeights = [].concat(_toConsumableArray(latestVisibleHeights), [{
          slideIndex: slideIndex,
          height: height
        }]);
      }
    }
    setVisibleHeights(newVisibleHeights);
    if (newVisibleHeights.length >= Math.min(numSlides, Math.ceil(slidesToShow))) {
      setInitializedAdaptiveHeight(true);
    }
  }, [numSlides, setVisibleHeights, slidesToShow, visibleHeightsRef]);
  var frameHeight = (0, _react.useMemo)(function () {
    if (adaptiveHeight) {
      // We want server-side-rendering to render the carousel with non-zero
      // height. to achieve this, we first set the height to `auto` until
      // we've received the heights of the visible slides. Then, we switch to
      // a mode where the frame controls the height.
      if (!initializedAdaptiveHeight) {
        return 'auto';
      }
      var maxHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleHeights.map(function (height) {
        return height.height;
      }))));
      return "".concat(maxHeight, "px");
    } else {
      return 'auto';
    }
  }, [adaptiveHeight, initializedAdaptiveHeight, visibleHeights]);
  return {
    handleVisibleSlideHeightChange: handleVisibleSlideHeightChange,
    frameHeight: frameHeight,
    initializedAdaptiveHeight: initializedAdaptiveHeight
  };
};