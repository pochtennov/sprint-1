import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import orderDonePath from '../../images/done.svg'
import styles from './index.module.css';

interface Props {
    onClose: () => void,
}

const OrderDetails: React.FC<Props> = ({ onClose }) => {
    return (<Modal onClose={onClose}>
                <h4 className={`${styles.text} text text_type_digits-large pt-4 pb-8`}>034536</h4>
                <p className={`${styles.text} text text_type_main-medium pb-15`}>идентификатор заказа</p>
                <img className={`${styles.doneImage} pb-15`} src={orderDonePath} alt='order done' />
                <p className={`${styles.text} text text_type_main-default pb-2`}>Ваш заказ начали готовить</p>
                <p className={`${styles.text} text text_type_main-default text_color_inactive pb-30`}>Дождитесь готовности на орбитальной станции</p>
            </Modal>)
}

OrderDetails.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default OrderDetails;
