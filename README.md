# Notes on React Hook useRef

1. useRef can store reference to a component. But it's not limited to only DOM component. It can store any kind of value. 
2. Code: `const refContainer = useRef(initialValue);`. The `refContainer.current` contain the initial value. refContainer holds a mutable value in its .current property.
3. Difference between createRef and useRef is that createRef can't hold anything besides DOM objects.
4. To get a ref of a component use something like this: `<div ref={refContainer}>`. This would store the div component into the refContainer.
5. Updating the .current value would never cause a rerender
6. The refContainer would exist for the full life time of a component
