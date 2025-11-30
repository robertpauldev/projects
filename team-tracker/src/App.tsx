import Team from "./components/team/team";
import Data from "./components/data/data";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <h1 className={ styles.heading }>Team Tracker</h1>
      <Data />
      <Team />
    </>
  )
}

export default App;