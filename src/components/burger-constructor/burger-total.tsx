import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './index.module.css';
import dummyData from '../../utils/data';

interface Props {
    totalPrice: number,
}
const BurgerTotal: React.FC<Props> = ({ totalPrice }) => {
    return (<div className={`${styles.totalContainer} pt-6 pr-4`}>
                <p className={'text text_type_digits-medium pr-10'}>{totalPrice} <CurrencyIcon type={'primary'} /></p>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>)
}

export default BurgerTotal;
