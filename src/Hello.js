import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useMeasure from './useMeasure';

const Hello = () => {

    function getInitialValue() {
        console.log('func called');
        return JSON.parse(localStorage.getItem("count") || 0);
    }

    const [count, setCount] = useState(getInitialValue); //same as useState(() => JSON.parse(localStorage.getItem("count")||0))
    //using initiator function in useState because we don't want to call JSON.parse in every rerenders
    // const [count, setCount] = useState(getInitialValue()); This calls the getInitialValue function in every rerender.

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const { data, loading } = useFetch('http://numbersapi.com/' + count);

    const [rect, divRef] = useMeasure([data]);

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div ref={divRef}>{!data && loading ? "...loading" : data} </div>
            </div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}

export default Hello;