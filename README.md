# Notes on React Hook useEffect

1. useEffect by default gets called everytime the component it belongs to gets rendered or re-rendered
2. The first parameter takes a function which is called every render or based on second parameter
3. The second parameter takes an array which contains the variables only for which the render needs to be called
4. The second parameter limits the call of useEffect based on the variables passed into the array
5. Passing no values to useEffect makes it call only once
6. A Cleanup Function can be returned from useEffect which gets called for every re-render
7. To call a cleanup function only while unmounting, pass an empty array
8. Effects are a good place to add and remove event Listeners
9. There can be more than one useEffect in a component and they'll be fired off in their lexical order that's top to bottom