import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RecentSearchDataContext from "./contexts/RecentSearchDataContext";
import WindowResizeContext from "./contexts/WindowResizeContext";

function App() {
  return (
    <RecentSearchDataContext>
      <WindowResizeContext>
        <Header />
        <HomePage />
      </WindowResizeContext>
    </RecentSearchDataContext>
  );
}

export default App;
