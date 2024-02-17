import {createSlice} from "@reduxjs/toolkit";
import {addQuizId} from "../topics/TopicsSlice";

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuizObj = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
            state.quizzes[action.payload.id] = newQuizObj;
        }
    }
});

// action creator that returns a thunk that dispatches these two actions one after the other
export const thunkAddQuizCreator = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, quizId: payload.id}));
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;