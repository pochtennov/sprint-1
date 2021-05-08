import React from 'react';
import PropTypes from 'prop-types';
import OrderDetails from '../order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './index.module.css';

interface Props {
    totalPrice: number,
}
const BurgerTotal: React.FC<Props> = ({ totalPrice }) => {

    const [visible, setVisibility] = React.useState(false);
    const openModal = () => setVisibility(true);
    const closeModal = () => setVisibility(false);
    
    const modal = visible ? (<OrderDetails onClose={closeModal} />) : null;
    return (<div className={`${styles.totalContainer} pt-6 pr-4`}>
                <p className={'text text_type_digits-medium pr-10'}>{totalPrice} <CurrencyIcon type={'primary'} /></p>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
                {modal}
            </div>)
}

BurgerTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
}

export default BurgerTotal;
