
import { useState } from "react";
import IngredientList from "./Ingredients";
import ClaudeRecipe from "./ClaudeRecipe";
import getRecipeFromMistral from "./ai"

export default function Main(){
    const [recipe,setRecipe]=useState("")
    const[ingredients,setIngredients]=useState([])
    function Submitted(event){
        event.preventDefault();
        const formEl=event.currentTarget
        const formData=new FormData(formEl)
        const newIngredient=formData.get("ingredient")
        if (newIngredient) {
            setIngredients(prevState => [...prevState, newIngredient]);
        }
        event.target.reset()
    }
    async function getRecipe(){
       const recipeMarkdown = await  getRecipeFromMistral(ingredients)
       setRecipe(recipeMarkdown)
    }
    return(
        <main>
            <form className="add-ingredient-form" onClick={Submitted} >
                <input
                 type="text"
                 placeholder="e.g. oregano"
                 aria-label="add-ingredient"
                 name="ingredient"
                />
                <button >Add Ingredient</button>
            </form>
          <IngredientList recipe={getRecipe} ingredients={ingredients}/>
            {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
    )
}

