import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsTab: React.FC = () => {
    const [current, setCurrent] = React.useState('rolls');
    return (<div style={{ display: 'flex' }} className={'pb-10'}>
                <Tab value="rolls" active={current === 'rolls'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="toppings" active={current === 'toppings'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>)
}

export default IngredientsTab;
