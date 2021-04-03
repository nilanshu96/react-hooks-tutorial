# Notes on React Hook useEffect

1. useEffect by default gets called everytime the component it belongs to gets rendered or re-rendered
2. The first parameter takes a function which is called every render or based on second parameter
3. The second parameter takes an array which contains the variables only for which the render needs to be called.
4. The second parameter limits the call of useEffect based on the variables passed into the array.
5. Passing no values to useEffect makes it call only once