
import React from 'react';
import BurgerComponent from './burger-component';
import BurgerTotal from './burger-total'
import styles from './index.module.css';

const BurgerConstructor: React.FC = () => {
    return (<section className={`${styles.container} pl-4 pt-25`}>
                <BurgerComponent
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'} 
                />
                <ul className={`${styles.mainIngredients} pr-2`}>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <BurgerComponent
                        isLocked={false}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    />
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                    <li>
                        <BurgerComponent
                            isLocked={false}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                        />
                    </li>
                </ul>
                    <BurgerComponent
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    />
                    <BurgerTotal totalPrice={630}/>
            </section>)
}

export default BurgerConstructor;
