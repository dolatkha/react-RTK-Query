import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../pages/SearchBar";
// import { useState } from "react";
// import axios from "axios";
// import { usePostsQuery } from "../redux/services/postsApi";

const Navbar = (term) => {
const navigate=useNavigate();
  // const [movies] = usePostsQuery();
  // const search = async (term) => {
  //   await addPost({
  //     name: name,
  //   });
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/movies?name=${term}`
  //     );
  //     setMovies(response.data);
  //   } catch (e) {
  //     setMovies([]);
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies/create">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-start">
              <SearchBar onSubmit={() => {
                  navigate(`/movies?name=${term}`);
                }} initialValue="AAA" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
