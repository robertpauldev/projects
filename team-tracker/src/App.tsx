import Team from "./components/team/team";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <h1 className={ styles.heading }>Team Tracker</h1>
      <Team />
    </>
  )
}

export default App;