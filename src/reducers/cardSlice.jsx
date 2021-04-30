import {createSlice} from "@reduxjs/toolkit";
import {createNewList} from "../data/index"

export const cardSlice = createSlice({
    name: 'cardList',
    initialState: {
        list: createNewList(),
        step: 0,
        level: null,
        counter: null
    },
    reducers: {
        itemTrue: (state, data) => {
            let item = state.list.find(item => +item.id === +data.payload)
            item.check = true
        },
        itemFalse: (state, data) => {
            state.list.map(item => {
                if (item.check === true) {
                    return item.check = false
                } else return item
            })
        },
        itemCheckState: (state, data) => {
            let items = state.list.filter(i => i.check === true)
            if (items[0].id === items[1].idCheck) {
                items[0].state = true;
                items[1].state = true;
            }
        },
        stepMove: (state, data) => {
            state.step = state.step + 1;
        },
        selectLevel: (state, data) => {
            state.level = data.payload
        },
        saveTime: (state, data) => {
            state.counter = data.payload
        }

    }
});
export const {itemTrue, itemFalse, itemCheckState, stepMove, selectLevel, saveTime} = cardSlice.actions;
export default cardSlice.reducer;