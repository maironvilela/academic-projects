import { Feed, Header, Profile } from './components';
import styles from './styles/app.module.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <div className={styles.content}>
        <Profile />
        <Feed />
      </div>
    </>
  );
}

export default App;
