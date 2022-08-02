
import Styles from './Recipe.module.css'

function Recipe({title,ingredients,calories,image}){
    console.log(ingredients)
    return(
        <div className={Styles.recipe}>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(ingre => (
                    <li>{ingre.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" className={Styles.image}/>
        </div>
    )
}


export default Recipe;