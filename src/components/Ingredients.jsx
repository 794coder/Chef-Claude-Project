/* eslint-disable react/prop-types */

export default function IngredientList(props){
    const ans=props.ingredients.map(item=><li key={item}>{item}</li>)
    return(
        <>
             {props.ingredients.length>0&&<section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" >
                    {ans}
                </ul>
                {props.ingredients.length>3?<div className="get-recipe-container">
                    <div>
                        <h3>Ready for  a recipe?</h3>
                        <p>Generate a recipe from a list of ingredients.</p>
                    </div>
                    <button onClick={props.recipe}>Get a recipe</button>
                </div>:null}
            </section>}
        </>
    )
}