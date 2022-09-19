import { faker } from '@faker-js/faker';
import styles from './styles.module.css';

// Alterar nome do arquivo para feed
export function Feed() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <figure className={styles.avatar}>
          <img src={faker.internet.avatar()} />
        </figure>
        <section className={styles.authorInfo}>
          <strong>{faker.name.fullName()}</strong>
          <span>{faker.name.jobArea()}</span>
        </section>
        <time
          dateTime={`${faker.date.recent()}`}
          title={`${faker.date.past().toDateString()}`}
        >
          Públicado há 1h
        </time>
      </header>

      <section className={styles.main}>
        <p>Fala Galera 👏</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <a href="#"> 👉 jane.design/doctorcare</a>

        <p className={styles.tags}>
          <a href="#"> #novoprojeto </a>
          <a href="#"> #nlw </a>
          <a href="#"> #rocketseat</a>
        </p>
      </section>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea></textarea>
        <footer>
          <button> Publicar </button>
        </footer>
      </form>
    </article>
  );
}
