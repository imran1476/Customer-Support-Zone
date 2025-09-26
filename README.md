# React FAQ - Concepts Explained

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It makes it easier to create and visualize the structure of React components.  
Example:
```jsx
const element = <h1>Hello, world!</h1>;
Why use JSX?

More readable and expressive than plain JavaScript.

Lets you describe UI structure in a declarative way.

Compiles to React.createElement() under the hood.


# React Concepts FAQ

## 2. What is the difference between State and Props?

| Feature    | State                                     | Props                                         |
|------------|------------------------------------------|-----------------------------------------------|
| **Definition** | Represents internal data of a component | Represents data passed from parent to child |
| **Mutability** | Can be changed within the component    | Read-only, cannot be changed by the child component |
| **Purpose**    | To manage dynamic, interactive data    | To pass information between components      |

---

## 3. What is the useState hook, and how does it work?

**useState** is a React hook that allows functional components to have state.

**Example:**
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
useState(0) initializes count with 0.

setCount updates the state and triggers a re-render.

4. How can you share state between components in React?
Lifting State Up: Move the state to the nearest common parent component and pass it down via props.

Context API: Provides a way to share state globally without passing props through every level.

State management libraries: Like Redux, Zustand, or Recoil for larger applications.

5. How is event handling done in React?
Events in React are handled using camelCase syntax, not lowercase like HTML.

You pass a function reference as the event handler.

Example:

jsx
Copy code
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
