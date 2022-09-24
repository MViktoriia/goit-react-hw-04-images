import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';


const ImageGallery = ({ images, onClick }) => {
    return (
        <ul className={style.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                return <ImageGalleryItem key={id} onClick={onClick} largeImageURL={largeImageURL} imageURL={webformatURL} tags={tags} />;
            })}
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};


export default ImageGallery;
