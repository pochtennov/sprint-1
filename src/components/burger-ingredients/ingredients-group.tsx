import React from 'react';
import IngredientCard from './ingredients-card';
import styles from './index.module.css';

interface Props {
  groupName: string,
  groupIngredients: Array<Ingredient>,
}

const IngredientsGroup: React.FC<Props> = ({ groupName, groupIngredients }) => {
    return (<li style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 className={'text text_type_main-medium pb-6'} style={{textAlign: 'left'}}>{groupName}</h4>
                <ul className={`pr-4 pl-4 pb-2 ${styles.ingredientCardsContainer}`}>
                    {groupIngredients.map(el => <IngredientCard name={el.name} price={el.price} image={el.image} key={el.id} />)}
                </ul>
            </li>)
}

export default IngredientsGroup;
