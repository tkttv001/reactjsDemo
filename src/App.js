import "./App.scss";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Auth from "./pages/login/Auth";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
