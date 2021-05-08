import React from 'react';
import PropTypes from 'prop-types';
import IngredientCard from './ingredients-card';
import styles from './index.module.css';

interface Props {
  groupName: string,
  groupIngredients: Array<Ingredient>,
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

const IngredientsGroup: React.FC<Props> = ({ groupName, groupIngredients }) => {
    return (<li style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 className={'text text_type_main-medium pb-6'} style={{textAlign: 'left'}}>{groupName}</h4>
                <ul className={`pr-4 pl-4 pb-2 ${styles.ingredientCardsContainer}`}>
                  {groupIngredients.map((ingredient, ind) => <IngredientCard ingredient={ingredient} count={ind % 2 ? 0 : 1} key={ingredient._id} />)}
                </ul>
            </li>)
}

IngredientsGroup.propTypes = {
    groupName: PropTypes.string.isRequired,
    groupIngredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}


export default IngredientsGroup;
