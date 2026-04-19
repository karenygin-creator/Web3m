import styles from "./ProductInfo.module.css";
function ProductInfo({title,description,price,specs,colors}){
    return(
        <div className={styles.info}>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>{price}</h2>
            <div className={styles.buttons}>
                <button>Позвонить</button>
                <button>Заказать звонок</button>
            </div>
            <div className={styles.colors}>
                {colors.map((c,i)=>(
                    <div key={i} style={{background:c}}></div>
                ))}
            </div>
            <p>{specs}</p>
        </div>

    );
}
export default ProductInfo;