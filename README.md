# Notes on React Hook useMemo

1. Used to return a memoized value
2. Can be used to optimize at places where a function returns the same value for the same parameters
3. React can randomly choose to forget a memomized value and recompute it. Hence useMemo should only be used for optimizations and the code shouldn't be dependent on its functionality.
4. The function passed to useMemo is run during rendering. Do not write any code that cannot be run during rendering like codes or side-Effects which require rendering to finish. Side effects should always go in useEffect or useLayoutEffect.
5. The difference between useMemo and useCallback is that in useCallback the function is memoized or in other words the function isn't created again in re-renders while in useMemo the value returned by the function is memoized and the function isn't called in subsequent renders.
6. Check [App.js](./src/App.js) for a use case of useMemo
