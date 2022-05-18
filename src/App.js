import Minibar from "components/Minibar";
import AppRouter from "components/Router";
import "./style/style.sass";
import plan from "./images/plants.png";

function App() {
  return (
    <div className="app">
      <AppRouter />
      <img src={plan} id="plant" alt="plan" width="220px" />
      <footer>©taei-Kang, 2022</footer>
    </div>
  );
}

export default App;
