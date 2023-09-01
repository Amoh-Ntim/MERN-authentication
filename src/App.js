import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthPage from './AuthPage';
import Home from "./Home";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
