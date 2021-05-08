import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './index.module.css';

const BurgerComponent: React.FC<BurgerComponent> = (props) => {
    return (<div className={styles.burgerComponent}>
                {props.isLocked ? null : 
                    <DragIcon type={'primary'} />}
                <div style={{marginLeft: 'auto'}}>
                    <ConstructorElement
                        type={props.type}
                        isLocked={props.isLocked}
                        text={props.text}
                        price={props.price}
                        thumbnail={props.thumbnail}
                    />
                </div>
            </div>)
}

BurgerComponent.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['top', 'bottom', undefined]),
}

export default BurgerComponent;
