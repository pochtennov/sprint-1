import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './index.module.css';

const IngredientCard: React.FC<Ingredient> = ({ name, price, image, count = 0 }) => {
    return (<li className={`mb-8 ${styles.ingredientCard}`}>
                {count > 0 && <Counter size={'default'} count={1} />}
                <img src={image} alt={`${name}`} className={'ml-4 mr-4'}/>
                <div style={{display: 'flex', flexDirection: 'row'}} className={'mt-1 mb-1'}>
                    <p className={'text text_type_digits-default mr-2'}>{price}</p>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <p className={'text text_type_main-default'}>{name}</p>
            </li>)
}

export default IngredientCard;
