# Notes on React Hook useState

1. This is a replacement of the state object in class components
2. To use it call `useState(initialValue)` which returns an array
3. The array countains one state member and the setter function for the member. Example: `let [count, setCount] = useState(10)`. Here count = 10.
4. pass a function to the useState whenever there is some expensive initial value calculation. This will ensure that the expensive function will only be called once. Example: `useState(() => expensiveFunc())`. 
5. setter function can be used to in two ways => `setter(newValue)` or `setter(currentValue => newValue)`. currentValue here represents the current state. Using the second way ensures that there are no race conditions when more updates are happening simultaneously or for updates to not get overwritten. **This is because state is always updated in batch when called the first way. The batching of setState ensures that if a state for an element is being changed by multiple places only the recent update is displayed to the client.**
6. More info on how setState works: https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973 
7. More info on why batching is used for setState: https://github.com/facebook/react/issues/11527#issuecomment-360199710

### Difference between this.setState in class and useState

Read the following example

```javascript
let [{count1, count2}, setCount] = useState({count1: 10, count2: 20});
setCount(currentState => ({count1: currentState.count1 + 1}))
```

When doing this.setState in a class component, new state object would be `{count1: 11, count2: 20}` because it merges the current state with the new value being set but in the case of useState it won't merge. The new state object would be `{count1: 11}`. Hence with useState we need to update like this: 

```javascript
setCount(currentState => ({...currentState, count1: currentState.count1 + 1}))
```

This behavior happens because in case of class the state object would be represented as `{count1:10, count2:20}` but in a functional component the state object would be something like this `{countObject: {count1: 10, count2: 20}}`. Refer to [App2.js](./src/App2.js) to see how the functional component for the above case would be represented in a class component.

**Therefore if you're passing an object to useState to use an object as a state member, always merge the object yourself while updating.**

To properly make use of the useState break the object `{count1, count2}` to the following:

```javascript
let [count1, setCount] = useState(10);
let [count2, setCount] = useState(20);
```
For the above the class equivalent state would be `this.state = {count1: 10, count2: 20}`