
import React from 'react';
import IngredientsTab from './ingredients-tab';
import IngredientsGroup from './ingredients-group';
import styles from './index.module.css';
import dummyData from '../../utils/data';

const buns: Array<Ingredient> = dummyData.filter(el => el.type === 'bun').map(el => ({ name: el.name, price: el.price, image: el.image, id: el._id }))
const sauces: Array<Ingredient> = dummyData.filter(el => el.type === 'sauce').map(el => ({ name: el.name, price: el.price, image: el.image, id: el._id }))
const main: Array<Ingredient> = dummyData.filter(el => el.type === 'main').map(el => ({ name: el.name, price: el.price, image: el.image, id: el._id }))

const BurgerIngredients: React.FC = () => {
    return (<section className={styles.container}>
                <h3 className={'text text_type_main-large pt-10 pb-5'} style={{textAlign: 'left'}}>Соберите бургер</h3>
                <IngredientsTab />
                <ul className={styles.ingredientsContainer}>
                    <IngredientsGroup groupName={'Булки'} groupIngredients={buns}/>
                    <IngredientsGroup groupName={'Соусы'} groupIngredients={sauces}/>
                    <IngredientsGroup groupName={'Начинки'} groupIngredients={main}/>
                </ul>
            </section>)
}

export default BurgerIngredients;
