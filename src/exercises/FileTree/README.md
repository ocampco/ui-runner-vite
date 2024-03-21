# React Coding Challenge - Collapsible Tree Component

The objective of this challenge is to test your understanding of React's basic principles.

## Challenge

You are provided with a JSON object which represents a file structure in a tree-like format. Your task is to create a collapsible tree component in React using this object.

The object is structured as follows:

```javascript
export const data = {
  id: '1',
  name: 'Root',
  icon: 'folder',
  children: [
    // More objects like this, nested indefinitely
  ],
};
```

Each object in the children array is an object of the same format - having properties id, name, icon, and children.

The children array can be empty, indicating that this node has no child nodes.

### Requirements

- Create a the necessary component(s) to display the name of each node in the tree structure.
- Expand/Collapse feature: Each node that has children should also have a button to expand or collapse its children. When the button is pressed, the component should toggle between showing and hiding its children. When the collapse is open show a minus `-` sign to hide children, and show a plus `+` sign to expand.
