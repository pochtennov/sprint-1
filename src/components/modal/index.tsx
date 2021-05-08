import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay';
import ModalContent from './modal-content';

interface Props {
    headerText?: string,
    children?: React.ReactNode,
    onClose: () => void,
}

const Modal: React.FC<Props> = ({ headerText, children, onClose }) => {
    const modalRoot = document.getElementById('modal-root')!;
    const modal = (<div>
                        <ModalContent headerText={headerText} onClose={onClose}>{children}</ModalContent>
                        <ModalOverlay onClose={onClose} />
                    </div>);
    return ReactDOM.createPortal(modal, modalRoot)
}

Modal.propTypes = {
    headerText: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
}

export default Modal;
