import { useEffect } from 'react';

const Hello = () => {
    
    useEffect(() => {
        return () => {
            console.log("hello unmounted");
        }
    }, []);
    
    return (
        <div>Hello</div>
    )
}

export default Hello;