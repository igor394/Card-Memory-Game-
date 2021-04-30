import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectLevel} from '../reducers/cardSlice'

const Menu = ({begin}) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.memory);


    const hendlerOne=useCallback((e)=>{
        dispatch(selectLevel(e.target.id))
    },[])
    const hendlerTwo=useCallback((e)=>{
        dispatch(selectLevel(e.target.id))
    },[])
    const hendlerThree=useCallback((e)=>{
        dispatch(selectLevel(e.target.id))
    },[])
    const hendlerStart=useCallback(()=>{
        begin(true)
    },[begin])


    return (
        <div className='wraper'>
            <div className='start-menu'>
                {!store.level ? <div>
                    <h3>Select a level to start the game!</h3>
                    <button className='btn-select' onClick={hendlerOne} id='beginner'>beginner </button>
                    <button className='btn-select' onClick={hendlerTwo} id='intermediate'>intermediate </button>
                    <button className='btn-select' onClick={hendlerThree} id='advanced'>advanced</button>
                </div> : <div>
                    <button className='btn-select' onClick={hendlerStart} id=''>start</button>
                </div>}

            </div>
        </div>
    );
};

export default Menu;