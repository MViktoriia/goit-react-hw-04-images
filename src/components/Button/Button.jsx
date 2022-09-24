import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (<button className={style.Button} type='button' onClick={onClick}>{text}</button>);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;