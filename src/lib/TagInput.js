import React, { useState } from "react";

import "./TagInput.css";

function TagInput({ tags, setTags, inputStyle, closeButtonStyle, tagstyle, placeholder }) {
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
            <input
                className="input-field"
                style={inputStyle}
                type="text"
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder || "Type a tag and press Enter"}
            />
            <div style={{ display: 'flex' }}>
                {tags.map((tag, index) => (
                    <div key={index} style={{ display: 'block', flexDirection: 'row', ...tagstyle }} className="tag">
                        {tag}
                        <span className="delete" onClick={() => handleDelete(tag)} style={closeButtonStyle}>
                            x
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TagInput;