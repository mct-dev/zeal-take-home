import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { HomeWrapper, List, ListItem } from "./styles"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from '@material-ui/core/Typography';
import * as actions from "../../actions"
import Recipe from "../Recipe"

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"]

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleIngredient = this.handleIngredient.bind(this)
    this.fetchSearch = this.fetchSearch.bind(this)
    this.state = {
      term: "",
      ingredients: ["milk"],
    }
  }
  fetchSearch() {
    const { term, ingredients } = this.state
    this.props.searchRecipes(term, ingredients)
  }
  handleSearch(event) {
    const term = event.target.value
    this.setState({ term })
  }
  handleIngredient(ingredient, event) {
    const { ingredients } = { ...this.state }
    if (event.target.checked) {
      ingredients.push(ingredient)
    } else {
      const foundIngredient = ingredients.indexOf(ingredient)
      ingredients.splice(foundIngredient, 1)
    }
    this.setState({ ingredients })
  }
  render() {
    const { term, ingredients } = this.state
    const { recipes, isLoading } = this.props

    return (
      <HomeWrapper>
        <Input
          autoFocus={true}
          fullWidth={true}
          onChange={this.handleSearch}
          value={term}
          placeholder="Enter search term..."
        />
        <div style={{ margin: '20px 0'}}>
          <Typography variant="h4" gutterBottom>
            Ingredients on hand
          </Typography>
          {ingredientList.map((ingredient) => (
            <FormControlLabel
              key={ingredient}
              control={
                <Checkbox
                  checked={ingredients.includes(ingredient)}
                  onChange={this.handleIngredient.bind(this, ingredient)}
                  value={ingredient}
                />
              }
              label={ingredient}
            />
          ))}
        </div>
        <Button variant="outlined" color="primary" onClick={this.fetchSearch}>search</Button>
        {/* <Divider style={{ margin: '10px 0'}} /> */}
        {recipes && (
          <List>
            {recipes.map((recipe) => (
              <ListItem
                key={recipe.id}
                onClick={() => this.props.getRecipeById(recipe.id)}
              >
                <ListItemText primary={recipe.name} />
              </ListItem>
            ))}
          </List>
        )}
        {isLoading && <LinearProgress />}
        <Recipe />
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { search } = state
  return { ...search }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchRecipes: actions.searchRecipes,
      getRecipeById: actions.getRecipeById,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
