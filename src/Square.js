import React from 'react';
import useCountRenders from './useCountRenders';

// eslint-disable-next-line react/prop-types
const Square = ({ n, increment }) => {
    useCountRenders();

    return <button onClick={() => increment(n)}>{n}</button>
}


export default React.memo(Square);