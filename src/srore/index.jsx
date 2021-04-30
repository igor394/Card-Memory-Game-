import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../reducers/cardSlice';

export default configureStore({
     reducer: {
          memory: cardSlice
     }
})