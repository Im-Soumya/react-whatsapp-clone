import './App.css';
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
