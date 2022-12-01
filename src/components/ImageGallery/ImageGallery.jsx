import styles from './image_gallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({hits, addModalImg}) =>{
    const elements = hits.map(({id, webformatURL, largeImageURL}) =>(
        <ImageGalleryItem 
        onClick={()=> addModalImg(largeImageURL)}
        key={id}
        url={webformatURL}
        />))

    return(
        <ul className={styles.ImageGallery}>
            {elements}
        </ul>
    );
};
export default ImageGallery;