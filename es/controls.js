"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _controlStyles = require("./control-styles");
var _types = require("./types");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var controlsMap = [{
  funcName: 'renderTopLeftControls',
  key: _types.Positions.TopLeft
}, {
  funcName: 'renderTopCenterControls',
  key: _types.Positions.TopCenter
}, {
  funcName: 'renderTopRightControls',
  key: _types.Positions.TopRight
}, {
  funcName: 'renderCenterLeftControls',
  key: _types.Positions.CenterLeft
}, {
  funcName: 'renderCenterCenterControls',
  key: _types.Positions.CenterCenter
}, {
  funcName: 'renderCenterRightControls',
  key: _types.Positions.CenterRight
}, {
  funcName: 'renderBottomLeftControls',
  key: _types.Positions.BottomLeft
}, {
  funcName: 'renderBottomCenterControls',
  key: _types.Positions.BottomCenter
}, {
  funcName: 'renderBottomRightControls',
  key: _types.Positions.BottomRight
}];
var renderControls = function renderControls(props, count, currentSlide, moveSlide, _nextSlide, prevSlide, slidesToScroll) {
  if (props.withoutControls) {
    return null;
  }
  return controlsMap.map(function (control) {
    var _props$control$funcNa;
    if (!props[control.funcName] || typeof props[control.funcName] !== 'function') {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: control.funcName
      });
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: control.funcName,
      style: _objectSpread(_objectSpread({}, (0, _controlStyles.getControlContainerStyles)(control.key)), {}, {
        pointerEvents: 'none'
      })
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: ["slider-control-".concat(control.key.toLowerCase()), props.defaultControlsConfig.containerClassName || ''].join(' ').trim()
      // The container has `pointerEvents: 'none'` so we need to override
      // that to make sure the controls are clickable.
      ,
      style: {
        pointerEvents: 'auto'
      }
    }, (_props$control$funcNa = props[control.funcName]) === null || _props$control$funcNa === void 0 ? void 0 : _props$control$funcNa.call(props, {
      cellAlign: props.cellAlign,
      cellSpacing: props.cellSpacing,
      currentSlide: currentSlide,
      defaultControlsConfig: props.defaultControlsConfig || {},
      goToSlide: function goToSlide(index) {
        return moveSlide(index);
      },
      nextSlide: function nextSlide() {
        return _nextSlide();
      },
      previousSlide: function previousSlide() {
        return prevSlide();
      },
      scrollMode: props.scrollMode,
      slideCount: count,
      slidesToScroll: slidesToScroll,
      slidesToShow: props.slidesToShow || 1,
      vertical: props.vertical,
      wrapAround: props.wrapAround
    })));
  });
};
var _default = exports["default"] = renderControls;