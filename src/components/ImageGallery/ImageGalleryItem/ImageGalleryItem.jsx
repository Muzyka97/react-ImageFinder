import styles from './image_gallery_item.module.css';

const ImageGalleryItem = ({url, id, onClick})=>{
    return(
        <li key={id} className={styles.ImageGalleryItem} onClick={onClick}>
         <img src={url} alt="photo" className={styles.ImageGalleryItemImage} />
        </li>
    );
};
export default ImageGalleryItem;