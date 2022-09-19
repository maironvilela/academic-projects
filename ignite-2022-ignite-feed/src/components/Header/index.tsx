import styles from './style.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src="./assets/images/logo-ignite-feed.svg" alt="Logo ignite feed" />
        </header>
    );
}
