import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hompage from "../pages/Hompage";
import Login from "../pages/login/Login";
import PrivateRoute from "../components/PrivateRoute";
import StatesList from "../pages/StatesList";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/states"
            element={
              <PrivateRoute>
                <StatesList />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
