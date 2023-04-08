import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TagInput from "./TagInput";

describe("TagInput", () => {
    test("renders a list of tags", () => {
        const tags = ["tag1", "tag2", "tag3"];
        const { getByText } = render(<TagInput tags={tags} />);
        tags.forEach((tag) => {
            const tagElement = getByText(tag);
            expect(tagElement).toBeInTheDocument();
        });
    });

    test("adds a new tag when Enter key is pressed", () => {
        const tags = ["tag1", "tag2"];
        const setTags = jest.fn();
        const { getByPlaceholderText } = render(
            <TagInput tags={tags} setTags={setTags} />
        );
        const inputElement = getByPlaceholderText("Type a tag and press Enter");
        fireEvent.change(inputElement, { target: { value: "tag3" } });
        fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
        expect(setTags).toHaveBeenCalledWith(["tag1", "tag2", "tag3"]);
    });

    test("deletes a tag when delete button is clicked", () => {
        const tags = ["tag1", "tag2", "tag3"];
        const setTags = jest.fn();
        const { getByText } = render(
            <TagInput tags={tags} setTags={setTags} />
        );
        const deleteButton = getByText("x");
        fireEvent.click(deleteButton);
        expect(setTags).toHaveBeenCalledWith(["tag1", "tag3"]);
    });
});