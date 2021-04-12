# Notes on React Hook useReducer

1. An alternative to useState. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

2. useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one

3. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks

4. Do not mutate the state within the reducer function. As for mutable objects the react compares the object reference before rendering. If a new object is not returned, the object ref would remain the same and react wouldn't re-render. With primitives doing a post ++ or post -- (example state++ instead of ++state) would not cause any re-render as the returned state is exactly the same as the state passed. 

5. useReduced is preferred over useState whenever there is a requirement to update multiple state values from a single action. Refer to [App.js](./src/App.js) to see an example where the todoCount and todolist are both changed using a single action.

6. The reducer function can get more complex trying to maintain the immutability of the state object. To help maintaining immutability, library like [use-immer](https://github.com/immerjs/use-immer) is really helpful where it allows us to mutate the state within the reducer.