import { faker } from '@faker-js/faker';
import { PencilLine } from 'phosphor-react';
import styles from './styles.module.css';
export function Profile() {
    return (
        <aside className={styles.aside}>
            <figure className={styles.cover}>
                <img src={faker.image.city()} />
            </figure>

            <figure className={styles.avatar}>
                <img src={faker.internet.avatar()} />
            </figure>

            <strong>Mairon Vilela</strong>
            <span>Developer</span>

            <footer className={styles.footer}>
                <a href="#">
                    <PencilLine size={20} />
                    <span>Editar seu perfil</span>
                </a>
            </footer>
        </aside>
    );
}
