import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import "./index.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
