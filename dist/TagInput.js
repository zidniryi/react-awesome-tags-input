"use strict";

var _interopRequireWildcard = require("/Users/admin/Project/library/react-awesome-tags-input/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("/Users/admin/Project/library/react-awesome-tags-input/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("/Users/admin/Project/library/react-awesome-tags-input/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _toConsumableArray2 = _interopRequireDefault(require("/Users/admin/Project/library/react-awesome-tags-input/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Project/library/react-awesome-tags-input/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = _interopRequireWildcard(require("react"));
require("./TagInput.css");
function TagInput(_ref) {
  var tags = _ref.tags,
    setTags = _ref.setTags,
    inputStyle = _ref.inputStyle,
    closeButtonStyle = _ref.closeButtonStyle,
    tagstyle = _ref.tagstyle,
    placeholder = _ref.placeholder;
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  function handleKeyDown(event) {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([].concat((0, _toConsumableArray2.default)(tags), [inputValue.trim()]));
      setInputValue("");
    }
  }
  function handleDelete(tag) {
    setTags(tags.filter(function (t) {
      return t !== tag;
    }));
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    className: "input-field",
    style: inputStyle,
    type: "text",
    value: inputValue,
    onKeyDown: handleKeyDown,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    placeholder: placeholder || "Type a tag and press Enter"
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, tags.map(function (tag, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: (0, _objectSpread2.default)({
        display: 'block',
        flexDirection: 'row'
      }, tagstyle),
      className: "tag"
    }, tag, /*#__PURE__*/_react.default.createElement("span", {
      className: "delete",
      onClick: function onClick() {
        return handleDelete(tag);
      },
      style: closeButtonStyle
    }, "x"));
  })));
}
var _default = TagInput;
exports.default = _default;