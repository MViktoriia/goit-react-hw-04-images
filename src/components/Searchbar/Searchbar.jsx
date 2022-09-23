import { Component } from 'react'
import style from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        search: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
    }

    handleInputChange = (event) => {
        this.setState({
            search: event.target.value,
        })
    }

    render() {
        const { search } = this.state;
        const { handleSubmit, handleInputChange } = this;
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
}