import React from 'react';
import useCountRenders from './useCountRenders';

// eslint-disable-next-line react/prop-types
const Hello = ({increment}) => {
    useCountRenders();
    return <button onClick={() => increment(5)}>hello</button>
}


export default React.memo(Hello);