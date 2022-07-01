import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/navigation/navbar.component";
const Shop = () => <p>I am Shop component</p>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
