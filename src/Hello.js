import {useState, useEffect, useLayoutEffect, useRef } from 'react';
import useFetch from './useFetch';

const Hello = () => {

    function getInitialValue() {
        console.log('func called');
        return JSON.parse(localStorage.getItem("count") || 0);
    }

    const [count, setCount] = useState(getInitialValue); //same as useState(() => JSON.parse(localStorage.getItem("count")||0))
    //using initiator function in useState because we don't want to call JSON.parse in every rerenders
    // const [count, setCount] = useState(getInitialValue()); This calls the getInitialValue function in every rerender.

    const divRef = useRef();

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const { data, loading } = useFetch('http://numbersapi.com/' + count);

    useLayoutEffect(() => {
        console.log(divRef.current.getBoundingClientRect());
    }, [data]);

    return (
        <div style={{display: 'flex'}}>
            <div ref={divRef}>{!data && loading ? "...loading" : data} </div>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}

export default Hello;