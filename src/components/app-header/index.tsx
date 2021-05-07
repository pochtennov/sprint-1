import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderLink from './header-link';
import styles from './index.module.css';

const AppHeader: React.FC = () => {
    return (<header className={`pb-4 pt-4 ${styles.container}`}>
                <nav className={styles.navigation}>
                    <HeaderLink icon={<BurgerIcon type="primary" />} text={'Конструктор'} hrefLocation={'#constructor'} isActive additionalClassNames={'mr-2'}/>
                    <HeaderLink icon={<ListIcon type="primary" />} text={'Лента заказов'} hrefLocation={'#order_feed'} />
                </nav>
                <a className={styles.logo} href="#">
                    <Logo />
                </a>
                <nav className={styles.authorization}>
                    <HeaderLink icon={<ProfileIcon type="primary" />} text={'Личный кабинет'} hrefLocation={'#profile'} />
                </nav>
            </header>)
}

export default AppHeader;
