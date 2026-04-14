import styles from "./ProductGallery.module.css";
function ProductGallery({ images, currentIndex, setCurrentIndex }) {
    function next() {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
    }
    function prev() {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
    }
    return (
        <>
            <div className={styles.gallery}>
                <img src={images[currentIndex]}
                    className={styles.mainImage}
                    alt="main" />
                <div className={styles.controls}>
                    <button onClick={prev}>⬅</button>
                    <div className={styles.thumbs}>
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setCurrentIndex(i)}
                                className={currentIndex === i ? styles.active : ""} />
                        ))}

                    </div>
                    <button onClick={next}>⮕</button>
                </div>
            </div>

        </>
    );
}
export default ProductGallery;