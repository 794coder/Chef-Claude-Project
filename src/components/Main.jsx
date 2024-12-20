
import { useEffect, useRef, useState } from "react";
import IngredientList from "./Ingredients";
import ClaudeRecipe from "./ClaudeRecipe";
import getRecipeFromMistral from "./ai"

export default function Main(){
    const [recipe,setRecipe]=useState("")
    const[ingredients,setIngredients]=useState([])
    const recipeSection=useRef(null)
    console.log(recipeSection)
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
    useEffect(()=>{
        if(recipe!==""&&recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
    },[recipe])
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
          <IngredientList recipe={getRecipe} ingredients={ingredients} ref={recipeSection}/>
            {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
    )
}

