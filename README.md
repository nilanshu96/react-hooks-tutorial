# Notes on React Hook useMemo

1. Used to return a memoized value
2. Can be used to optimize at places where a function returns the same value for the same parameters
3. React can randomly choose to forget a memomized value and recompute it. Hence useMemo should only be used for optimizations and the code shouldn't be dependent on its functionality.
4. The function passed to useMemo is run during rendering. Do not write any code that cannot be run during rendering like codes or side-Effects which require rendering to finish. Side effects should always go in useEffect or useLayoutEffect.
5. Check [App.js](./src/App.js) for a use case of useMemo
