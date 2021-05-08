import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import styles from './index.module.css';

interface Props {
    ingredient: Ingredient,
    onClose: () => void,
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

const IngredientDetails: React.FC<Props> = ({ ingredient, onClose }) => {
    return (<Modal headerText={'Детали ингридиента'} onClose={onClose}>
                <img src={ingredient.image} alt={ingredient.name} className={`${styles.image} pr-5 pl-5 pb-4`}/>
                <h4 className={`${styles.ingredientName} text text_type_main-medium pb-8`}>{ingredient.name}</h4>
                <p className={`${styles.ingredientDescription} text text text_type_main-default pb-8`}>{'Превосходные котлеты из марсианской Магнолии для фирменных космических бургеров, набирающих популярность по всей вселенной.'}</p>
                <span className={`${styles.infoContainer} pb-15`}>
                    <div>
                        <p className={'text text_type_main-default text_color_inactive'} style={{width: '120px'}}>Калории,ккал</p>
                        <p className={'text text_type_digits-default text_color_inactive'}>{ingredient.calories}</p>
                    </div>
                    <div>
                        <p className={'text text_type_main-default text_color_inactive'} style={{width: '112px'}}>Белки, г</p>
                        <p className={'text text_type_digits-default text_color_inactive'}>{ingredient.proteins}</p>
                    </div>
                    <div>
                        <p className={'text text_type_main-default text_color_inactive'} style={{width: '112px'}}>Жиры, г</p>
                        <p className={'text text_type_digits-default text_color_inactive'}>{ingredient.fat}</p>
                    </div>
                    <div>
                        <p className={'text text_type_main-default text_color_inactive'} style={{width: '112px'}}>Углеводы, г</p>
                        <p className={'text text_type_digits-default text_color_inactive'}>{ingredient.carbohydrates}</p>
                    </div>
                </span>
            </Modal>)
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropTypes.isRequired,
    onClose: PropTypes.func.isRequired
}


export default IngredientDetails;
