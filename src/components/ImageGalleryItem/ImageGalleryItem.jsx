import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageURL, tags, largeImageURL, onClick }) => {
    return (
        <li onClick={()=>onClick({largeImageURL, tags})} className={style.ImageGalleryItem}>
            <img src={imageURL} alt={tags} className={style.ImageGalleryItemImage} />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    imageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;