
import { TagInput } from "./lib";
import { useState } from "react";

function App() {
  const [tags, setTags] = useState([]);

  return (
    <div style={{ marginLeft: 200, marginTop: 40 }}>
      <TagInput
        inputStyle={{
          width: "400px"
        }}
        placeholder={"Click Enter to add tags"}
        tags={tags} setTags={setTags}
        closeButtonStyle={{ color: 'blue' }} />
    </div>
  );
}

export default App;
