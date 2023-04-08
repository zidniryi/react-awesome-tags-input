
# react-awesome-tags-input

react-awesome-tags-input is a library for text that is small and easy to customize
## Features
- customize styles
- small size
- easy to use




## Installation
You can use npm

```
npm i react-awesome-tags-input
```

or via Yarn

```js
yarn add react-awesome-tags-input
```


## Usage
    
Here's a sample implementation 


```javascript
import { TagInput } from "react-awesome-tags-input";
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
 ```

## Result
![enter image description here](https://i.ibb.co/SR2Y16G/Screen-Shot-2023-04-09-at-01-20-20.png)

<a name="Options"></a>
## Options

Option | Type | Default | Description
--- | --- | --- | ---
|[`tags`](#tags) | `Array` | `[]` | An array of tags that are displayed as pre-selected.|
|[`setTags`](#setTags) | `void` | `function` | for change the state
|[`inputStyle`](#inputStyle) | `style` | `style` | style for input form
|[`closeButtonStyle`](#closeButtonStyle) | `style` | `style` | style for input close x
|[`tagstyle`](#tagstyle) | `style` | `style` | style for input content tags
|[`placeholder`](#placeholder) | `placeholder` | `string` | place holder text



