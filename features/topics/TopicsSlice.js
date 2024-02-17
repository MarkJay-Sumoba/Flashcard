import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const newTopicObj = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            };
            state.topics[action.payload.id] = newTopicObj;
        },
        addQuizId: (state, action) => {
            const quizId = action.payload.quizId;
            const topicId = action.payload.topicId;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;

export default topicsSlice.reducer;