import React from 'react';

export const Counter = ({ count }) => {
    return(
    <p>
        <button onClick={ () => {console.log(count)} }>Up</button>&nbsp;
        <button onClick={ () => {console.log(count)} }>Down</button>&nbsp;
            the count is { count }
    </p>);
};

