import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import "./index.css";
import { BookProvider } from "./context/BookContext";
import ProtectedRoute from "./components/ProtectedRoute";

const DOMAIN = process.env.REACT_APP_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function App() {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BookProvider>
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route>
                <ProtectedRoute path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </Router>
        </ChakraProvider>
      </BookProvider>
    </Auth0Provider>
  );
}

export default App;
