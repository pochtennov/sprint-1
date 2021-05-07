import React from 'react';
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

export default BurgerComponent;
