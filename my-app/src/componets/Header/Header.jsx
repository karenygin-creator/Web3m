import styles from "./Header.module.css";
function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#" className={styles.navItem}>
                    Главная
                </a>
                <a href="#" className={styles.navItem}>
                    О нас
                </a>
                <a href="#" className={styles.navItem}>
                    Магазин
                </a>
                <a href="#" className={styles.navItem}>
                    Контакты
                </a>
            </nav>
        </header>
    )
}
export default Header;