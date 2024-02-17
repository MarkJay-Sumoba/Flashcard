import {createSlice} from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const newCardObj = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back,
            };
            state.cards[action.payload.id] = newCardObj;
        }
    }
});

export const selectCards = (state) => state.cards.cards;

export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;