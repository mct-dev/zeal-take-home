// TODO Create a connected component to render a fetched recipe
import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions"

const Recipe = (props) => {
  console.log(props)

  return <div>recipe</div>
}
const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setChosenRecipeId: actions.setRecipeId,
    },
    dispatch
  )

export default connect(mapStateToProps, null)(Recipe)
