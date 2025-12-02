"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Carousel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _slide = _interopRequireDefault(require("./slide"));
var _announceSlide = _interopRequireDefault(require("./announce-slide"));
var _sliderList = require("./slider-list");
var _controls = _interopRequireDefault(require("./controls"));
var _defaultCarouselProps = _interopRequireDefault(require("./default-carousel-props"));
var _utils = require("./utils");
var _useFrameHeight2 = require("./hooks/use-frame-height");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Carousel = exports.Carousel = /*#__PURE__*/_react["default"].forwardRef(function Carousel(rawProps, ref) {
  /**
   * We need this cast because we want the component's properties to seem
   * optional to external users, but always-present for the internal
   * implementation.
   *
   * This cast is safe due to the `Carousel.defaultProps = defaultProps;`
   * statement below. That guarantees all the properties are present, since
   * `defaultProps` has type `InternalCarouselProps`.
   */
  var props = rawProps;
  var adaptiveHeight = props.adaptiveHeight,
    adaptiveHeightAnimation = props.adaptiveHeightAnimation,
    afterSlide = props.afterSlide,
    animation = props.animation,
    autoplay = props.autoplay,
    autoplayInterval = props.autoplayInterval,
    autoplayReverse = props.autoplayReverse,
    beforeSlide = props.beforeSlide,
    cellAlign = props.cellAlign,
    cellSpacing = props.cellSpacing,
    children = props.children,
    className = props.className,
    disableAnimation = props.disableAnimation,
    disableEdgeSwiping = props.disableEdgeSwiping,
    dragging = props.dragging,
    propsDragThreshold = props.dragThreshold,
    enableKeyboardControls = props.enableKeyboardControls,
    frameAriaLabel = props.frameAriaLabel,
    innerRef = props.innerRef,
    keyCodeConfig = props.keyCodeConfig,
    listClassName = props.listClassName,
    onDrag = props.onDrag,
    onDragEnd = props.onDragEnd,
    onDragStart = props.onDragStart,
    pauseOnHover = props.pauseOnHover,
    renderAnnounceSlideMessage = props.renderAnnounceSlideMessage,
    scrollMode = props.scrollMode,
    slideClassName = props.slideClassName,
    slideIndex = props.slideIndex,
    propsSlidesToScroll = props.slidesToScroll,
    slidesToShow = props.slidesToShow,
    propsSpeed = props.speed,
    style = props.style,
    swiping = props.swiping,
    wrapAround = props.wrapAround,
    zoomScale = props.zoomScale;
  var count = _react["default"].Children.count(children);
  var _useState = (0, _react.useState)(autoplayReverse ? count - slidesToShow : slideIndex),
    _useState2 = _slicedToArray(_useState, 2),
    currentSlide = _useState2[0],
    setCurrentSlide = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    animationEnabled = _useState4[0],
    setAnimationEnabled = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    pause = _useState6[0],
    setPause = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDragging = _useState8[0],
    setIsDragging = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    move = _useState0[0],
    setMove = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    keyboardMove = _useState10[0],
    setKeyboardMove = _useState10[1];
  var carouselWidth = (0, _react.useRef)(null);
  var focus = (0, _react.useRef)(false);
  var prevMove = (0, _react.useRef)(0);
  var carouselEl = (0, _react.useRef)(null);
  var timer = (0, _react.useRef)(null);
  var isMounted = (0, _react.useRef)(true);
  var slidesToScroll = animation === 'fade' ? slidesToShow : propsSlidesToScroll;
  var dragThreshold = (carouselWidth.current || 0) / slidesToShow * propsDragThreshold;
  var _getIndexes = (0, _utils.getIndexes)(currentSlide, currentSlide - slidesToScroll, count),
    _getIndexes2 = _slicedToArray(_getIndexes, 1),
    slide = _getIndexes2[0];
  (0, _react.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  (0, _react.useEffect)(function () {
    // disable img draggable attribute by default, this will improve the dragging
    document.querySelectorAll('.slider-list img').forEach(function (el) {
      return el.setAttribute('draggable', 'false');
    });
  }, []);
  var carouselRef = innerRef || carouselEl;
  var getNextIndex = (0, _react.useCallback)(function (to) {
    var index = to !== null && to !== void 0 ? to : currentSlide;
    if (index < 0) {
      return index + count;
    }
    if (index === count) {
      return 0;
    }
    return index;
  }, [count, currentSlide]);
  var moveSlide = (0, _react.useCallback)(function (to) {
    var nextIndex = getNextIndex(to);
    typeof to === 'number' && beforeSlide(slide, nextIndex);
    !disableAnimation && setAnimationEnabled(true);
    if (typeof to === 'number') {
      setCurrentSlide(to);
    }
    setTimeout(function () {
      if (!isMounted.current) return;
      typeof to === 'number' && afterSlide(nextIndex);
      !disableAnimation && setAnimationEnabled(false);
    }, !disableAnimation ? propsSpeed || 500 : 40); // if animation is disabled decrease the speed to 40
  }, [slide, afterSlide, beforeSlide, disableAnimation, getNextIndex, propsSpeed]);
  var nextSlide = (0, _react.useCallback)(function () {
    if (wrapAround || currentSlide < count - propsSlidesToScroll) {
      var nextPosition = (0, _utils.getNextMoveIndex)(scrollMode, wrapAround, currentSlide, count, propsSlidesToScroll, slidesToShow);
      moveSlide(nextPosition);
    }
  }, [count, currentSlide, moveSlide, propsSlidesToScroll, scrollMode, wrapAround, slidesToShow]);
  var prevSlide = (0, _react.useCallback)(function () {
    // boundary
    if (wrapAround || currentSlide > 0) {
      var prevPosition = (0, _utils.getPrevMoveIndex)(scrollMode, wrapAround, currentSlide, propsSlidesToScroll);
      moveSlide(prevPosition);
    }
  }, [currentSlide, moveSlide, propsSlidesToScroll, scrollMode, wrapAround]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      moveSlide: moveSlide,
      nextSlide: nextSlide,
      prevSlide: prevSlide
    };
  });

  // When user changed the slideIndex property from outside.
  var prevMovedToSlideIndex = (0, _react.useRef)(slideIndex);
  (0, _react.useEffect)(function () {
    if (slideIndex !== prevMovedToSlideIndex.current && !autoplayReverse) {
      moveSlide(slideIndex);
      prevMovedToSlideIndex.current = slideIndex;
    }
  }, [slideIndex, currentSlide, autoplayReverse, moveSlide]);

  // Makes the carousel infinity when autoplay and wrapAround are enabled
  (0, _react.useEffect)(function () {
    if (autoplay && !animationEnabled && wrapAround) {
      if (currentSlide > count) {
        setCurrentSlide(currentSlide - count);
        if (timer !== null && timer !== void 0 && timer.current) {
          clearTimeout(timer.current);
        }
      } else if (currentSlide < 0) {
        setCurrentSlide(count - -currentSlide);
        if (timer !== null && timer !== void 0 && timer.current) {
          clearTimeout(timer.current);
        }
      }
    }
  }, [animationEnabled, currentSlide, count, wrapAround, autoplay]);
  (0, _react.useEffect)(function () {
    if (autoplay && !pause) {
      timer.current = setTimeout(function () {
        if (autoplayReverse) {
          if (!wrapAround && currentSlide > 0) {
            prevSlide();
          } else if (wrapAround) {
            prevSlide();
          }
        } else if (!wrapAround && currentSlide < count - slidesToShow) {
          nextSlide();
        } else if (wrapAround) {
          nextSlide();
        }
      }, autoplayInterval);
    }

    // Clear the timeout if user hover on carousel
    if (autoplay && pause && timer !== null && timer !== void 0 && timer.current) {
      clearTimeout(timer.current);
    }
    return function () {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [currentSlide, slidesToShow, count, pause, autoplay, autoplayInterval, autoplayReverse, wrapAround, prevSlide, nextSlide]);

  // Makes the carousel infinity when wrapAround is enabled, but autoplay is disabled
  (0, _react.useEffect)(function () {
    var prevTimeout = null;
    var nextTimeout = null;
    if (wrapAround && !autoplay) {
      // if animation is disabled decrease the speed to 0
      var speed = !disableAnimation ? propsSpeed || 500 : 0;
      if (currentSlide <= -slidesToShow) {
        // prev
        prevTimeout = setTimeout(function () {
          if (!isMounted.current) return;
          setCurrentSlide(count - -currentSlide);
        }, speed + 10);
      } else if (currentSlide >= count) {
        // next
        nextTimeout = setTimeout(function () {
          if (!isMounted.current) return;
          setCurrentSlide(currentSlide - count);
        }, speed + 10);
      }
    }
    return function cleanup() {
      if (prevTimeout) {
        clearTimeout(prevTimeout);
      }
      if (nextTimeout) {
        clearTimeout(nextTimeout);
      }
    };
  }, [currentSlide, autoplay, wrapAround, disableAnimation, propsSpeed, slidesToShow, count]);
  (0, _react.useEffect)(function () {
    if (enableKeyboardControls && keyboardMove && focus.current) {
      switch (keyboardMove) {
        case 'nextSlide':
          nextSlide();
          break;
        case 'previousSlide':
          prevSlide();
          break;
        case 'firstSlide':
          setCurrentSlide(0);
          break;
        case 'lastSlide':
          setCurrentSlide(count - slidesToShow);
          break;
        case 'pause':
          if (pause && autoplay) {
            setPause(false);
            break;
          } else if (autoplay) {
            setPause(true);
            break;
          }
          break;
      }
      setKeyboardMove(null);
    }
  }, [keyboardMove, enableKeyboardControls, count, slidesToShow, pause, autoplay, nextSlide, prevSlide]);
  var onKeyPress = (0, _react.useCallback)(function (e) {
    if (enableKeyboardControls && focus.current && e.keyCode) {
      var keyConfig = keyCodeConfig;
      for (var func in keyConfig) {
        var _keyConfig;
        if ((_keyConfig = keyConfig[func]) !== null && _keyConfig !== void 0 && _keyConfig.includes(e.keyCode)) {
          setKeyboardMove(func);
        }
      }
    }
  }, [enableKeyboardControls, keyCodeConfig]);
  (0, _react.useEffect)(function () {
    if (carouselEl && carouselEl.current) {
      carouselWidth.current = carouselEl.current.offsetWidth;
    } else if (innerRef) {
      carouselWidth.current = innerRef.current.offsetWidth;
    }
    if (enableKeyboardControls) {
      (0, _utils.addEvent)(document, 'keydown', onKeyPress);
    }
    return function () {
      (0, _utils.removeEvent)(document, 'keydown', onKeyPress);
    };
  }, [enableKeyboardControls, innerRef, onKeyPress]);
  var handleDragEnd = (0, _react.useCallback)(function (e) {
    if (!dragging || !isDragging) return;
    setIsDragging(false);
    onDragEnd(e);
    if (Math.abs(move) <= dragThreshold) {
      moveSlide();
      setMove(0);
      prevMove.current = 0;
      return;
    }
    var adjustedMove = (0, _utils.rtlMultiplier)() * move;
    if (adjustedMove > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
    setMove(0);
    prevMove.current = 0;
  }, [dragThreshold, isDragging, move, moveSlide, nextSlide, onDragEnd, prevSlide, dragging]);
  var onTouchStart = (0, _react.useCallback)(function (e) {
    if (!swiping) {
      return;
    }
    setIsDragging(true);
    onDragStart(e);
  }, [onDragStart, swiping]);
  var handlePointerMove = (0, _react.useCallback)(function (m) {
    if (!dragging || !isDragging) return;
    var moveValue = m * 0.75; // Friction
    var moveState = move + (moveValue - prevMove.current);

    // Exit drag early if passed threshold
    if (Math.abs(move) > dragThreshold) {
      handleDragEnd();
      return;
    }
    if (!wrapAround && disableEdgeSwiping && (currentSlide <= 0 && moveState <= 0 || moveState > 0 && currentSlide >= count - slidesToShow)) {
      prevMove.current = moveValue;
      return;
    }
    if (prevMove.current !== 0) {
      setMove(moveState);
    }
    prevMove.current = moveValue;
  }, [count, currentSlide, disableEdgeSwiping, dragThreshold, isDragging, handleDragEnd, move, dragging, slidesToShow, wrapAround]);
  var onTouchMove = (0, _react.useCallback)(function (e) {
    if (!dragging || !isDragging) return;
    onDragStart(e);
    var moveValue = ((carouselWidth === null || carouselWidth === void 0 ? void 0 : carouselWidth.current) || 0) - e.touches[0].pageX;
    handlePointerMove(moveValue);
  }, [dragging, isDragging, handlePointerMove, onDragStart]);
  var onMouseDown = (0, _react.useCallback)(function (e) {
    var _carouselRef$current;
    if (!dragging) return;
    carouselRef === null || carouselRef === void 0 || (_carouselRef$current = carouselRef.current) === null || _carouselRef$current === void 0 || _carouselRef$current.focus();
    setIsDragging(true);
    onDragStart(e);
  }, [carouselRef, dragging, onDragStart]);
  var onMouseMove = (0, _react.useCallback)(function (e) {
    var _carouselRef$current2;
    if (!dragging || !isDragging) return;
    onDrag(e);
    var offsetX = e.clientX - (((_carouselRef$current2 = carouselRef.current) === null || _carouselRef$current2 === void 0 ? void 0 : _carouselRef$current2.getBoundingClientRect().left) || 0);
    var moveValue = ((carouselWidth === null || carouselWidth === void 0 ? void 0 : carouselWidth.current) || 0) - offsetX;
    handlePointerMove(moveValue);
  }, [carouselRef, isDragging, handlePointerMove, onDrag, dragging]);
  var onMouseUp = (0, _react.useCallback)(function (e) {
    e === null || e === void 0 || e.preventDefault();
    handleDragEnd(e);
  }, [handleDragEnd]);
  var onMouseEnter = (0, _react.useCallback)(function () {
    if (pauseOnHover) {
      setPause(true);
    }
  }, [pauseOnHover]);
  var onMouseLeave = (0, _react.useCallback)(function () {
    if (pauseOnHover) {
      setPause(false);
    }
  }, [pauseOnHover]);
  var _useFrameHeight = (0, _useFrameHeight2.useFrameHeight)({
      adaptiveHeight: adaptiveHeight,
      slidesToShow: slidesToShow,
      numSlides: count
    }),
    frameHeight = _useFrameHeight.frameHeight,
    handleVisibleSlideHeightChange = _useFrameHeight.handleVisibleSlideHeightChange,
    initializedAdaptiveHeight = _useFrameHeight.initializedAdaptiveHeight;
  var renderSlides = function renderSlides(typeOfSlide) {
    var slides = _react["default"].Children.map(children, function (child, index) {
      var isCurrentSlide = wrapAround ? currentSlide === index || currentSlide === index + count || currentSlide === index - count : currentSlide === index;

      // If the child has a key, use it. Otherwise, use a combination of the
      // type of slide and the index.
      var key;
      if (child && _typeof(child) === 'object' && 'key' in child && child.key) {
        key = child.key;
      } else {
        key = "".concat(typeOfSlide, "-").concat(index);
      }
      return /*#__PURE__*/_react["default"].createElement(_slide["default"], {
        key: key,
        count: count,
        currentSlide: currentSlide,
        index: index,
        isCurrentSlide: isCurrentSlide,
        typeOfSlide: typeOfSlide,
        wrapAround: wrapAround,
        cellSpacing: cellSpacing,
        animation: animation,
        slidesToShow: slidesToShow,
        speed: propsSpeed,
        zoomScale: zoomScale,
        cellAlign: cellAlign,
        onVisibleSlideHeightChange: handleVisibleSlideHeightChange,
        adaptiveHeight: adaptiveHeight,
        initializedAdaptiveHeight: initializedAdaptiveHeight,
        slideClassName: slideClassName
      }, child);
    });
    return slides;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'slider-container',
    style: {
      position: 'relative'
    },
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/_react["default"].createElement(_announceSlide["default"], {
    ariaLive: autoplay && !pause ? 'off' : 'polite',
    message: renderAnnounceSlideMessage({
      currentSlide: slide,
      count: count
    })
  }), (0, _controls["default"])(props, count, currentSlide, moveSlide, nextSlide, prevSlide, slidesToScroll), /*#__PURE__*/_react["default"].createElement("div", {
    className: ['slider-frame', className || ''].join(' ').trim(),
    style: _objectSpread({
      overflow: 'hidden',
      width: '100%',
      position: 'relative',
      outline: 'none',
      height: frameHeight,
      transition: adaptiveHeightAnimation ? 'height 300ms ease-in-out' : undefined,
      willChange: 'height'
    }, style),
    "aria-label": frameAriaLabel,
    role: "region",
    tabIndex: 0,
    onFocus: function onFocus() {
      return focus.current = true;
    },
    onBlur: function onBlur() {
      return focus.current = false;
    },
    ref: innerRef || carouselEl,
    onMouseUp: onMouseUp,
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseUp,
    onTouchStart: onTouchStart,
    onTouchEnd: handleDragEnd,
    onTouchMove: onTouchMove
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: ['slider-list', listClassName].filter(function (value) {
      return value;
    }).join(' '),
    style: (0, _sliderList.getSliderListStyles)(children, currentSlide, animationEnabled, slidesToShow, cellAlign, wrapAround, propsSpeed, move, animation)
  }, wrapAround ? renderSlides('prev-cloned') : null, renderSlides(), wrapAround ? renderSlides('next-cloned') : null)));
});
Carousel.defaultProps = _defaultCarouselProps["default"];
var _default = exports["default"] = Carousel;