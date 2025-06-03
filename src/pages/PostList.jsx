import { useEffect } from "react";
import axios from "axios";

function PostList() {
  useEffect(() => {
    axios.get("http://localhost:3000/post").then((res) => {
      const response = res.data;
      console.log(response);
    });
  }, []);
  return <h1>Post list</h1>;
}

export default PostList;
