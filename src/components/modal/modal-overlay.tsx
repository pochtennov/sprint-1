import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

interface Props {
    onClose: () => void,
}
const ModalOverlay: React.FC<Props> = ({ onClose }) => {

    const closeModal = (event: any) => {
        if (event.key === "Escape" || event.target.id === 'modalOverlay' || event.target.id === 'closeIcon' ) onClose();
    }

    React.useEffect(() => {
        document.addEventListener('keydown', closeModal);
        document.addEventListener('click', closeModal);
        return () => {
            document.removeEventListener('keydown', closeModal);
            document.removeEventListener('click', closeModal);
        }
    })

    return (<div className={styles.modalOverlay} id='modalOverlay'></div>)
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
}


export default ModalOverlay;
