# Notes on React Hook useLayoutEffect:

1. Its signature is identical to useEffect but is fired synchronously after all DOM mutations
2. Use this to read layout from the DOM (example: reading the dimensions of a dynamically sized div) and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
3. Prefer the standard useEffect when possible to avoid blocking visual updates.
4. Check [useMeasure.js](./src/useMeasure.js) to see how useLayoutFetch can be incorporated in a custom hook to get the measurements of any component