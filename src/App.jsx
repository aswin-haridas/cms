import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./pages/auth";
import Test from "./pages/test/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
