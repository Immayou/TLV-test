import { createSlice, nanoid } from "@reduxjs/toolkit";

const questionsInitialState = [
  //   {
  //     id: 0,
  //     topic: "Biology",
  //     question_name: "2.1",
  //     question_text: "Learn HTML and CSS",
  //     difficulty: "70%",
  //     comment: "",
  //   },
  //   {
  //     id: "",
  //     topic: "Biology",
  //     question_name: "2.1",
  //     question_text: "Learn HTML and CSS",
  //     difficulty: "70%",
  //     comment: "",
  //   },
  //   {
  //     id: "",
  //     topic: "Biology",
  //     question_name: "2.1",
  //     question_text: "Learn HTML and CSS",
  //     difficulty: "70%",
  //     comment: "",
  //   },
  {
    id: "",
    topic: "",
    question_name: "",
    question_text: "",
    difficulty: "",
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
      prepare({ question_text, question_name, topic }) {
        return {
          payload: {
            id: nanoid(),
            topic,
            question_name,
            question_text,
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
        const index = state.questions.findIndex(
          (question) => question.id === payload.id
        );
        state.items.splice(index, 1, payload);
      },
    },
  },
});

export const { addQuestion, deleteQuestion, editQuestion } =
  questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
