import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
