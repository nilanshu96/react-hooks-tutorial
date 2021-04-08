# Notes on React Hook useCallback

1. useCallback helps memoizing a function ,i.e. the function isn't created again in re-renders if its dependencies aren't changed
2. It can be used along with React.memo
3. React.memo is a higher order component (function that take a component and returns a new component). It helps memoizing components based on props. If a component renders the same for the same prop, React.memo will ensure that the componet doesn't gets re-rendered.
4. Check [App.js](./src/App.js) for an example of how useCallback and React.memo is being utilized to avoid re-rendering.
