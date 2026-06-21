
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
