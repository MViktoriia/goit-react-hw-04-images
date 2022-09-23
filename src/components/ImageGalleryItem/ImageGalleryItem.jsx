import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, imageURL, tags, largeImageURL, onClick }) => {
    return (
        <li key={id} onClick={()=>onClick({largeImageURL, tags})} className={style.ImageGalleryItem}>
            <img src={imageURL} alt={tags} className={style.ImageGalleryItemImage} />
        </li>
    )
};

export default ImageGalleryItem;