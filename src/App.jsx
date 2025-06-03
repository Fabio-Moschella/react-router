import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PostList from "./pages/PostList";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="posts" element={<PostList />} />
      </Route>
    </Routes>
  );
}

export default App;
