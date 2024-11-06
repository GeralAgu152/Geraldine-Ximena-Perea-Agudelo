export default {
  checkAnswer: (state, action) => {
    const isCorrect = action.payload === state.currentFlag.name;
    if (isCorrect) {
      state.score += 1;
    } else {
      state.showModal = true; // Muestra el modal si es incorrecto
    }
  },
  hideModal: (state) => {
    state.showModal = false;
  },
  resetScore: (state) => {
    state.score = 0;
    state.showModal = false;
  },
};
