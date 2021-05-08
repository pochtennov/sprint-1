import React from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './index.module.css';

interface Props {
    headerText?: string,
    children?: React.ReactNode,
    onClose: () => void,
}
const ModalContent: React.FC<Props> = ({ headerText, children, onClose }) => {
    return (<div className={styles.modalContent}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: '64px'}} className={'mt-10 ml-10 mr-10'}>
                {headerText && <h3 className={'text text_type_main-large'} style={{marginRight: 'auto'}}>{headerText}</h3>}
                <CloseIcon onClick={() => onClose()} type={'primary'} />
              </div>
              {children}
            </div>)
}

ModalContent.propTypes = {
    headerText: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
}

export default ModalContent;
