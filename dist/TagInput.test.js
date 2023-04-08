"use strict";

var _interopRequireDefault = require("/Users/admin/Project/library/react-awesome-tags-input/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _TagInput = _interopRequireDefault(require("./TagInput"));
describe("TagInput", function () {
  test("renders a list of tags", function () {
    var tags = ["tag1", "tag2", "tag3"];
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TagInput.default, {
        tags: tags
      })),
      getByText = _render.getByText;
    tags.forEach(function (tag) {
      var tagElement = getByText(tag);
      expect(tagElement).toBeInTheDocument();
    });
  });
  test("adds a new tag when Enter key is pressed", function () {
    var tags = ["tag1", "tag2"];
    var setTags = jest.fn();
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TagInput.default, {
        tags: tags,
        setTags: setTags
      })),
      getByPlaceholderText = _render2.getByPlaceholderText;
    var inputElement = getByPlaceholderText("Type a tag and press Enter");
    _react2.fireEvent.change(inputElement, {
      target: {
        value: "tag3"
      }
    });
    _react2.fireEvent.keyDown(inputElement, {
      key: "Enter",
      code: "Enter"
    });
    expect(setTags).toHaveBeenCalledWith(["tag1", "tag2", "tag3"]);
  });
  test("deletes a tag when delete button is clicked", function () {
    var tags = ["tag1", "tag2", "tag3"];
    var setTags = jest.fn();
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TagInput.default, {
        tags: tags,
        setTags: setTags
      })),
      getByText = _render3.getByText;
    var deleteButton = getByText("x");
    _react2.fireEvent.click(deleteButton);
    expect(setTags).toHaveBeenCalledWith(["tag1", "tag3"]);
  });
});