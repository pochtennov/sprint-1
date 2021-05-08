import React from 'react';
import PropTypes from 'prop-types';
import IngredientDetails from '../ingredient-details';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './index.module.css';

interface Props {
    ingredient: Ingredient,
    count: number
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

const IngredientCard: React.FC<Props> = ({ingredient, count}) => {

    const [visible, setVisibility] = React.useState(false);
    const openModal = () => setVisibility(true);

    // я не могу понять почему именно тут не работает клик на крестик, все перепробовал. Функция запускается, но стейт не обновляется
    // причем в другом модальном окне все работает, хотя логика такая же
    const closeModal = () => setVisibility(false);
    
    const modal = visible ? (<IngredientDetails onClose={closeModal} ingredient={ingredient} />) : null;

    return (<li className={`${styles.ingredientCard} mb-8`} onClick={openModal}>
                {count > 0 && <Counter size={'default'} count={1} />}
                <img src={ingredient.image} alt={`${ingredient.name}`} className={'ml-4 mr-4'}/>
                <div style={{display: 'flex', flexDirection: 'row'}} className={'mt-1 mb-1'}>
                    <p className={'text text_type_digits-default mr-2'}>{ingredient.price}</p>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <p className={'text text_type_main-default'}>{ingredient.name}</p>
                {modal}
            </li>)
}

IngredientCard.propTypes = {
    ingredient: ingredientPropTypes.isRequired,
    count: PropTypes.number.isRequired
}

export default IngredientCard;
