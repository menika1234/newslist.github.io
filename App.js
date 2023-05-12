import "./App.css";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="News App" />
      <div className="container">
        <NewsList />
      </div>
    </>
  );
}

export default App;
