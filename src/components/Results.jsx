import React from 'react';
import {useSelector} from "react-redux";

const Results = () => {
    const store = useSelector(state => state.memory);

    return (
        <div>
            {store.counter ? <div>complete {store.counter}</div> : <div>Time is up(((</div>}
            <div>You step {store.step}</div>
            <div>you level {store.level}</div>
        </div>
    );
};

export default Results;