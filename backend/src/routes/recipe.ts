import { Request, Response, NextFunction } from "express"
import { Recipe, RecipeModel } from "../models"

interface RecipeResponse extends Pick<Recipe, "name" | "instructions"> {
  ingredients: string[]
}

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { id } = req.params
  const { name, instructions, ingredients } = await RecipeModel.findById(id)

  const cleanedIncredients = ingredients
    .map((i) => i.name)
    .reduce<string[]>((prev, curr) => {
      return prev.includes(curr) ? prev : [...prev, curr]
    }, [])

  const response: RecipeResponse = {
    name,
    instructions,
    ingredients: cleanedIncredients,
  }

  res.json(response)
}
