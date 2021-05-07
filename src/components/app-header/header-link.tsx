import React from 'react';
import styles from './index.module.css';

interface Props {
  icon: React.ReactNode,
  text: string,
  hrefLocation: string,
  isActive?: boolean,
  additionalClassNames?: string,
}


const HeaderLink: React.FC<Props> = ({ icon, text, hrefLocation, isActive = false, additionalClassNames = ''}) => {
    return (<a href={hrefLocation} className={`pl-5 pr-5 pb-4 pt-4 ${styles.link} ${additionalClassNames}`}>
                {icon}
                <p className={`text text_type_main-default ml-2 ${isActive ? '' : 'text_color_inactive'}`}>{text}</p>
            </a>)
}

export default HeaderLink;


