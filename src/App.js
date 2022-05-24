import AppRouter from "components/Router";
import "./style/style.sass";
import { BiArrowToTop } from "react-icons/bi";

function App() {
  const goToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      <AppRouter />
      <button onClick={goToTheTop}>
        <BiArrowToTop />
      </button>
    </div>
  );
}

export default App;
