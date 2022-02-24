import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
