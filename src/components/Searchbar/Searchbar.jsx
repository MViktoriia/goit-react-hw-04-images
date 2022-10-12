import { useState } from 'react';
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';


export default function Searchbar({ onSubmit }) {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
    };

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <header className={style.searchbar}>
            <form className={style.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={style.SearchFormButton}>
                    <span className={style.SearchFormButtonLabel}>Search</span>
                </button>
                
                <input
                    className={style.SearchFormInput}
                    type="text"
                    value={search}
                    onChange={handleInputChange}    
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>                
        </header>
    )
}


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}