import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PostList from "./pages/PostList";
import DefaultLayout from "./layout/DefaultLayout";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/post").then((res) => {
      const response = res.data;
      console.log(response);
    });
  }, []);
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
