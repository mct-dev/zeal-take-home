import React, { Component } from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import CardContent from "@material-ui/core/CardContent"
import * as actions from "../../actions"
import { Root } from "./styles"

const Recipe = ({ currentRecipe }) => {
  if (!currentRecipe) {
    return null
  }

  return (
    <Root variant="outlined" overflow="visible" data-testid="recipe-card">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {currentRecipe.name}
        </Typography>
        <Typography
          style={{ margin: "20px 0" }}
          variant="subtitle1"
          gutterBottom
        >
          Ingredients:{" "}
          {currentRecipe.ingredients.map((i) => (
            <Chip style={{ marginRight: "5px" }} label={i} />
          ))}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Instructions: {currentRecipe.instructions}
        </Typography>
      </CardContent>
    </Root>
  )
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getRecipeById: actions.getRecipeById,
    },
    dispatch
  )

export default connect(mapStateToProps, null)(Recipe)
