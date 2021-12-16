import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE } from "../actions"

const initialState = {
  chosenRecipeId: null,
  currentRecipe: null,
  isLoading: false,
  error: null,
}

const getRecipe = (state) => {
  return { ...state, isLoading: true }
}

const recipeFetched = (state, payload) => {
  return { ...state, isLoading: false, currentRecipe: payload }
}

const recipeFailed = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return getRecipe(state)
    case RECEIVE_RECIPE:
      return recipeFetched(state, payload)
    case FAIL_RECIPE:
      return recipeFailed(state, payload)
    default:
      return state
  }
}
