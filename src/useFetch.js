import { useEffect, useState, useRef } from 'react';

const useFetch = (url) => {

    const isCurrent = useRef(true); //isCurrent.current will persist throughout useFetch's life
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        return () => {
            //only called when component is unmounted
            isCurrent.current = false;
        }
    }, []);

    useEffect(() => {
        setState(currentState => ({ data: currentState.data, loading: true }))
        fetch(url)
            .then(resp => resp.text())
            .then(text => {
                //This is to show a memory leak scenario when hello gets unmounted from App.js but the setState action gets taken place after Hello has unmounted.
                setTimeout(() => {
                    if (isCurrent.current) { //This check can prevent memory leak
                        setState({ data: text, loading: false });
                    }
                }, 2000);
            })
            .catch(console.log)
    }, [url]);

    return state;
}

export default useFetch;