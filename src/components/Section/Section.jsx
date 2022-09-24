import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
    <section className={style.Section}>
        {title && <h2> {title}</h2>}{children}
    </section>
)

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Section;