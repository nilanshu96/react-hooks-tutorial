import {useState, useRef, useLayoutEffect} from 'react';

const useMeasure = (deps) => {

    const [rect, setRect] = useState({});
    const myRef = useRef();

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },deps);

    return [rect, myRef];
}

export default useMeasure;