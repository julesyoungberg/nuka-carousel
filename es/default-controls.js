"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevButtonDisabled = exports.nextButtonDisabled = exports.getDotIndexes = exports.PreviousButton = exports.PagingDots = exports.NextButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _types = require("./types");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable complexity */
var defaultButtonStyles = function defaultButtonStyles(disabled) {
  return {
    border: 0,
    background: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: 10,
    textTransform: 'uppercase',
    opacity: disabled ? 0.3 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
};
var prevButtonDisabled = exports.prevButtonDisabled = function prevButtonDisabled(_ref) {
  var currentSlide = _ref.currentSlide,
    slideCount = _ref.slideCount,
    slidesToShow = _ref.slidesToShow,
    wrapAround = _ref.wrapAround;
  // inifite carousel with visible slides that are less than all slides
  if (wrapAround && slidesToShow < slideCount) {
    return false;
  }

  // inifite carousel with visible slide equal or less than all slides
  if (wrapAround) {
    return false;
  }

  // if the first slide is not visible return false (button is not disabled)
  if (currentSlide !== 0) {
    return false;
  }
  return true;
};
var PreviousButton = exports.PreviousButton = function PreviousButton(props) {
  var handleClick = function handleClick(event) {
    event.preventDefault();
    props === null || props === void 0 || props.previousSlide();
  };
  var _ref2 = props.defaultControlsConfig || {},
    prevButtonClassName = _ref2.prevButtonClassName,
    _ref2$prevButtonStyle = _ref2.prevButtonStyle,
    prevButtonStyle = _ref2$prevButtonStyle === void 0 ? {} : _ref2$prevButtonStyle,
    prevButtonText = _ref2.prevButtonText;
  var disabled = prevButtonDisabled(props);
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: prevButtonClassName,
    style: _objectSpread(_objectSpread({}, defaultButtonStyles(disabled)), prevButtonStyle),
    disabled: disabled,
    onClick: handleClick,
    "aria-label": "previous",
    type: "button"
  }, prevButtonText || 'Prev');
};
var nextButtonDisabled = exports.nextButtonDisabled = function nextButtonDisabled(_ref3) {
  var currentSlide = _ref3.currentSlide,
    slideCount = _ref3.slideCount,
    slidesToShow = _ref3.slidesToShow,
    slidesToScroll = _ref3.slidesToScroll,
    wrapAround = _ref3.wrapAround,
    scrollMode = _ref3.scrollMode;
  // remainder scroll mode
  if (!wrapAround && scrollMode === _types.ScrollMode.remainder && currentSlide >= slideCount - slidesToShow) {
    return true;
  }
  // inifite carousel with visible slides that are less than all slides
  if (wrapAround && slidesToShow < slideCount) {
    return false;
  }

  // inifite carousel with visible slide equal or less than all slides
  if (wrapAround) {
    return false;
  }

  // if the last slide is not visible return false (button is not disabled)
  if (currentSlide < slideCount - slidesToScroll) {
    return false;
  }
  return true;
};
var NextButton = exports.NextButton = function NextButton(props) {
  var handleClick = function handleClick(event) {
    event.preventDefault();
    props.nextSlide();
  };
  var defaultControlsConfig = props.defaultControlsConfig;
  var nextButtonClassName = defaultControlsConfig.nextButtonClassName,
    _defaultControlsConfi = defaultControlsConfig.nextButtonStyle,
    nextButtonStyle = _defaultControlsConfi === void 0 ? {} : _defaultControlsConfi,
    nextButtonText = defaultControlsConfig.nextButtonText;
  var disabled = nextButtonDisabled(props);
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: nextButtonClassName,
    style: _objectSpread(_objectSpread({}, defaultButtonStyles(disabled)), nextButtonStyle),
    disabled: disabled,
    onClick: handleClick,
    "aria-label": "next",
    type: "button"
  }, nextButtonText || 'Next');
};
var getDotIndexes = exports.getDotIndexes = function getDotIndexes(slideCount, slidesToScroll, scrollMode, slidesToShow, wrapAround) {
  var dotIndexes = [];
  var scrollSlides = slidesToScroll === 0 ? 1 : slidesToScroll;
  for (var i = 0; i < slideCount; i += scrollSlides) {
    if (!(!wrapAround && scrollMode === _types.ScrollMode.remainder && i > slideCount - slidesToShow)) {
      dotIndexes.push(i);
    }
  }

  // check if the slidesToShow is float value, if true add the last dot (remainder scroll mode)
  if (!wrapAround && scrollMode === _types.ScrollMode.remainder && slidesToShow % 1 !== 0) {
    var lastIndex = dotIndexes[dotIndexes.length - 1];
    dotIndexes.push(lastIndex + slidesToShow % 1);
  }
  return dotIndexes;
};
var PagingDots = exports.PagingDots = function PagingDots(props) {
  var listStyles = {
    position: 'relative',
    top: -10,
    display: 'flex',
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  };
  var getButtonStyles = (0, _react.useCallback)(function (active) {
    return {
      cursor: 'pointer',
      opacity: active ? 1 : 0.5,
      background: 'transparent',
      border: 'none',
      fill: 'black'
    };
  }, []);
  var indexes = (0, _react.useMemo)(function () {
    return getDotIndexes(props.slideCount, props.slidesToScroll, props.scrollMode, props.slidesToShow, props.wrapAround);
  }, [props.slideCount, props.slidesToScroll, props.scrollMode, props.slidesToShow, props.wrapAround]);
  var _props$defaultControl = props.defaultControlsConfig,
    pagingDotsContainerClassName = _props$defaultControl.pagingDotsContainerClassName,
    pagingDotsClassName = _props$defaultControl.pagingDotsClassName,
    _props$defaultControl2 = _props$defaultControl.pagingDotsStyle,
    pagingDotsStyle = _props$defaultControl2 === void 0 ? {} : _props$defaultControl2;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: pagingDotsContainerClassName,
    style: listStyles
  }, indexes.map(function (index, i) {
    var isActive = props.currentSlide === index || props.currentSlide - props.slideCount === index || props.currentSlide + props.slideCount === index;

    // the below condition checks and sets navigation dots active if the current slide falls in the current index range
    if (props.currentSlide < index && props.currentSlide > indexes[i - 1]) {
      isActive = true;
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: isActive ? 'paging-item active' : 'paging-item'
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: pagingDotsClassName,
      type: "button",
      style: _objectSpread(_objectSpread({}, getButtonStyles(isActive)), pagingDotsStyle),
      onClick: props.goToSlide.bind(null, index),
      "aria-label": "slide ".concat(index + 1, " bullet"),
      "aria-selected": isActive
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "paging-dot",
      width: "6",
      height: "6",
      "aria-hidden": "true",
      focusable: "false"
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "3",
      cy: "3",
      r: "3"
    }))));
  }));
};