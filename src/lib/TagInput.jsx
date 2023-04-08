import React, { useState } from "react";

function TagInput({ tags, setTags }) {
    const [inputValue, setInputValue] = useState("");

    function handleKeyDown(event) {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    }

    function handleDelete(tag) {
        setTags(tags.filter((t) => t !== tag));
    }

    return (
        <div>
            <div>
                {tags.map((tag) => (
                    <div key={tag} className="tag">
                        {tag}
                        <span className="delete" onClick={() => handleDelete(tag)}>
                            x
                        </span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a tag and press Enter"
            />
        </div>
    );
}

export default TagInput;