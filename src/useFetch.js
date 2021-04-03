import {useEffect, useState} from 'react';

const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        setState(currentState => ({data: currentState.data, loading: true}))
        fetch(url)
            .then(resp => resp.text())
            .then(text => setState({data:text, loading: false}))
            .catch(console.log)
    }, [url]);

    return state;
}

export default useFetch;