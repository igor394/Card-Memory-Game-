import React from 'react';
import ItemCard from "./ItemCard";
import {useSelector, useDispatch} from "react-redux";
import {itemTrue, itemFalse, itemCheckState, stepMove} from '../reducers/cardSlice'

const CardList = ({count}) => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.memory.list);
    const step = useSelector(state => state.memory.step);

    const checkedItem = (e) => {
        dispatch(stepMove());
        let id = e.currentTarget.id;
        if (step % 2 === 0) {
            dispatch(itemTrue(id))
        } else {
            dispatch(itemTrue(id))
            setTimeout(() => {
                dispatch((itemFalse()))
            }, 300)
            dispatch(itemCheckState())
        }
    }

    return (
        <>
            <div>{count}</div>
            <div className='list-cards'>
                {list.map((item, index) => <ItemCard checkedItem={checkedItem} item={item} key={index}/>)}
            </div>
        </>

    );
};

export default CardList;