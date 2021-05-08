
import React from 'react';
import PropTypes from 'prop-types';
import BurgerComponent from './burger-component';
import BurgerTotal from './burger-total'
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


const BurgerConstructor: React.FC<Props> = ({ ingredients }) => {
    const bun: Ingredient = ingredients.filter((el: Ingredient) => el.type === 'bun')[0];
    return (<section className={`${styles.container} pl-4 pt-25`}>
                <BurgerComponent
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image} 
                />
                <ul className={`${styles.mainIngredients} pr-2`}>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image} 
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    </li>
                </ul>
                    <BurgerComponent
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image} 
                    />
                    <BurgerTotal totalPrice={630}/>
            </section>)
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerConstructor;
