import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
    closeModal = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            this.props.onClose();
        }       
    };

    render() {
        const { largeImageURL, tags } = this.props;
        return createPortal(
            <div className={style.Overlay} onClick={this.closeModal}>
                <div className={style.Modal}>\
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
            modalRoot
        )
    }
};

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

