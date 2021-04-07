import { useRef } from 'react';

const Hello = () => {
    
    const renders = useRef(0);

    console.log("hello renders: " + renders.current);
    renders.current++;
    
    return (
        <div>Hello</div>
    )
}

export default Hello;