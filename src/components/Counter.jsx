import React, {useEffect, useState, useMemo} from 'react';
import {saveTime} from '../reducers/cardSlice';
import {useSelector, useDispatch} from "react-redux";

const Counter = ({param, result}) => {
    const [counter, setCounter] = useState(param);
    const list = useSelector(state => state.memory.list);
    const dispatch = useDispatch();

    const isCompleted = useMemo(() => !list.find(i => i.state === false), [list]);

    useEffect(() => {
        if (isCompleted) {
            result(true)
            dispatch(saveTime(param - counter))
        } else {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
            if (counter === 0) result(true);
        }
    }, [counter]);

    return (
        <div style={{paddingTop: '20px'}}>
            <span>time to complete: {counter}</span>
        </div>
    );
};

export default Counter;