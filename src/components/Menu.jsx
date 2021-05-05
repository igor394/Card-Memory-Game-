import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectLevel} from '../reducers/cardSlice'

const Menu = ({begin}) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.memory);

    const hendlerOne = useCallback((e) => {
        dispatch(selectLevel(e.target.id))
    }, [])
    const hendlerTwo = useCallback((e) => {
        dispatch(selectLevel(e.target.id))
    }, [])
    const hendlerThree = useCallback((e) => {
        dispatch(selectLevel(e.target.id))
    }, [])
    const hendlerStart = useCallback(() => {
        begin(true)
    }, [begin])


    return (
        <div className='start-menu'>
            {!store.level ? <div className='menu-title'>
                <div><h1>Select a level to start the game!</h1></div>
                <div className='menu-btn'>
                    <div>
                        <button className='btn-select' onClick={hendlerOne} id='beginner'>beginner</button>
                    </div>
                    <div>
                        <button className='btn-select' onClick={hendlerTwo} id='intermediate'>intermediate</button>
                    </div>
                    <div>
                        <button className='btn-select' onClick={hendlerThree} id='advanced'>advanced</button>
                    </div>
                </div>
            </div> : <div>
                <div>
                    <button className='btn-select' onClick={hendlerStart}>start</button>
                </div>
            </div>}
        </div>
    );
};

export default Menu;