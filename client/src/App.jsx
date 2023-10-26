import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";

function App() {
  function Layout() {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    console.log(user);
    return user?.token ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return (
    <div className="text-3xl font-bold underline">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
