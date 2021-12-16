/*
  TODO: Create reducer and state updates here for recipe
*/
import { SET_RECIPE_ID } from "../actions"

const initialState = {
  chosenRecipeId: null,
  currentRecipe: null,
  isLoading: false,
  error: null,
}

const setChosenRecipeId = (state, payload) => {
  return { ...state, chosenRecipeId: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPE_ID:
      return setChosenRecipeId(state, payload)
    default:
      return state
  }
}