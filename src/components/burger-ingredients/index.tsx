
import React from 'react';
import PropTypes from 'prop-types';
import IngredientsTab from './ingredients-tab';
import IngredientsGroup from './ingredients-group';
import styles from './index.module.css';

interface Props {
    ingredients: Array<Ingredient>;
}

const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
});

const BurgerIngredients: React.FC<Props> = ({ ingredients }) => {
    const buns: Array<Ingredient> = ingredients.filter((el: Ingredient) => el.type === 'bun');
    const sauces: Array<Ingredient> = ingredients.filter((el: Ingredient) => el.type === 'sauce');
    const main: Array<Ingredient> = ingredients.filter((el: Ingredient) => el.type === 'main');
    return (<section className={styles.container}>
                <h3 className={'text text_type_main-large pt-10 pb-5'} style={{textAlign: 'left'}}>Соберите бургер</h3>
                <IngredientsTab />
                <ul className={styles.ingredientsContainer}>
                    <IngredientsGroup groupName={'Булки'} groupIngredients={buns} />
                    <IngredientsGroup groupName={'Соусы'} groupIngredients={sauces} />
                    <IngredientsGroup groupName={'Начинки'} groupIngredients={main}/>
                </ul>
            </section>)
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;
