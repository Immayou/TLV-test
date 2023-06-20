import { createSlice } from "@reduxjs/toolkit";

const questionsInitialState = [
  {
    id: 1,
    topic: "Biology",
    question_name: "3.1",
    difficulty: "70%",
    comment: "",
  },
  {
    id: 2,
    topic: "Geometry",
    question_name: "2.1",
    difficulty: "70%",
    comment: "",
  },
  {
    id: 3,
    topic: "Math",
    question_name: "2.1",
    difficulty: "70%",
    comment: "",
  },
];

const questionsSlice = createSlice({
  name: "questions",
  initialState: questionsInitialState,
  reducers: {
    addQuestion: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare({ id, question_name, topic, comment }) {
        return {
          payload: {
            id,
            topic,
            question_name,
            comment,
            difficulty: "70%",
          },
        };
      },
    },
    deleteQuestion: {
      reducer(state, { payload }) {
        const index = state.findIndex((question) => question.id === payload);
        state.splice(index, 1);
      },
    },
    editQuestion: {
      reducer(state, { payload }) {
        const index = state.findIndex((question) => question.id === payload.id);
        state.splice(index, 1, payload);
      },
      prepare({ id, question_name, topic, comment }) {
        return {
          payload: {
            id,
            topic,
            question_name,
            comment,
            difficulty: "70%",
          },
        };
      },
    },
  },
});

export const { addQuestion, deleteQuestion, editQuestion } =
  questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
