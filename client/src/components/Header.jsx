import styles from "../styles/Header.module.css"
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className={styles.headerDiv}>
        <div className={styles.headerContainer}>
            <span className={styles.logo}>CARD GAME</span>
            <div className={styles.headerItems}>
                <span className={styles.balance}>$9.99</span>
                <span className={styles.avatar}>
                    <FontAwesomeIcon icon={faUserTie} />
                </span>
                <button className={styles.authBtn}>Login</button>
            </div>
        </div>
    </header>
  )
}

export default Header