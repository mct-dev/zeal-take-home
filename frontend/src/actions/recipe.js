export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"

const fetchingRecipe = () => ({
  type: GET_RECIPE,
})

const fetchedRecipe = (payload) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const failedRecipe = (payload) => ({
  type: FAIL_RECIPE,
  payload,
})

export const executeGetRecipe = async (id) => {
  const response = await fetch(`/api/recipes/${id}`, {
    method: "GET",
  })
  const recipeResponse = await response.json()
  return recipeResponse
}

export const getRecipeById = (id) => {
  return (dispatch) => {
    dispatch(fetchingRecipe())
    return executeGetRecipe(id)
      .then((res) => dispatch(fetchedRecipe(res)))
      .catch((err) => dispatch(failedRecipe(err)))
  }
}