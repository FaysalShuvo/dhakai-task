import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";
import PrivateRoute from "./protectedRoute/PrivateRoute";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
     
      <BrowserRouter>
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Header />
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
              </Route> 
                    
              <Route
                path="login"
                element={user ? <Navigate to="/" /> : <Login />}
              /> 
            </Routes>
          </div>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
