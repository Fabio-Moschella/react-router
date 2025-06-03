import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/post").then((res) => {
      const response = res.data.data;

      setPosts(response);
    });
  }, []);

  // /imgs/posts/ciambellone.jpg
  const getImageURL = (path) => {
    return `http://localhost:3000${path}`;
  };

  return (
    <>
      <h1>Post List</h1>
      <div className="container">
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-4 my-3">
              <div className="card h-100 g-2 ">
                <img
                  className="card-img"
                  src={getImageURL(post.image)}
                  alt=""
                />

                <div className="card-body bg-light ">
                  <div className="card-title mb-3">
                    <h1 className="fs-2 fw-bold text-info">{post.title}</h1>
                  </div>

                  <div className="card-text  text-info">{post.content}</div>
                  <div className="card-text  text-info">{post.tags}</div>
                </div>
              </div>
              <NavLink
                to={`/PostDetail/${post.id}`}
                className="btn btn-primary my-3"
              >
                Vedi Dettagli
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
