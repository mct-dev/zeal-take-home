/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/
export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"
export const SET_RECIPE_ID = "SET_RECIPE_ID"

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

export const setRecipeId = (payload) => ({
  type: SET_RECIPE_ID,
  payload
})

export const executeGetRecipe = async (id) => {
  const response = await fetch(`/api/recipes/${id}`, {
    method: "GET",
  })
  const recipeResponse = await response.json()
  return recipeResponse
}

export const searchRecipes = (name, ingredients) => {
  return (dispatch) => {
    dispatch(fetchingSearch())
    return executeSearch(name, ingredients)
      .then((res) => dispatch(fetchedSearch(res)))
      .catch((err) => dispatch(failedSearch(err)))
  }
}