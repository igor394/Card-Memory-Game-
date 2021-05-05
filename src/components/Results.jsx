import React from 'react';
import {useSelector} from "react-redux";

const Results = ({restart}) => {
    const store = useSelector(state => state.memory);

    return (
        <>
            {store.counter ? <h2>You completed a {store.level} level in {store.counter} seconds by
                    making {Math.floor(store.step / 2)} moves </h2>
                :
                <h2>Time is up((( You not completed a {store.level} level spending on
                    it {Math.floor(store.step / 2)} moves </h2>}
                <div style={{marginTop: '200px'}}>
                    <button className='btn-select' onClick={restart}>New game</button>
                </div>
        </>
    );
};

export default Results;