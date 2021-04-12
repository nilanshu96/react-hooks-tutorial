# Notes on React Hook useContext

1. useContext is helpful in sharing data throughout the application by storing the data in a context. This context is created using `React.createContext()` (see [UserContext.js](./src/UserContext.js)).

2. useContext accepts a context object (the value returned from `React.createContext`) and returns the current context value for that context. The current context value is determined by the value prop of the nearest `<MyContext.Provider>` above the calling component in the tree. (see [App.js](./src/App.js) on how value is passed using `<MyContext.Provider>`)

3. When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext. So a change in the nearest `MyContext.Provider` above the component will always re-render the component no matter what.

4. A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization. (See [App.js](./src/App.js) on the use of memoization to avoid the change of `providerValue` variable in every re-render)

5. Note on Context: Context contains data that is required by multiple components throughout the application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. See [App.js](./src/App.js) for a scenario where the User data needs to be shared with the Home and the About pages.