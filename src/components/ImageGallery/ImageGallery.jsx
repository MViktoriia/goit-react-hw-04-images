import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
    return (
        <ul className={style.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                return <ImageGalleryItem key={id} onClick={onClick} largeImageURL={largeImageURL} imageURL={webformatURL} tags={tags} />;
            })}
        </ul>
    )
};

export default ImageGallery;
