import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../../images/closeIcon.svg'
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
                {/* icon from the lib works shitty, that's why img */}
                <img id={'closeIcon'} style={{ margin: '3px' }} src={closeIcon} alt='close modal' />
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
