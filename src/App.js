import { CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState();
  const [page, setpage] = useState();

  const fetchData = async (input, page) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${
        !input ? "yatch" : input
      }&client_id=F1yaBd8gEOmUCo7uyD6cqM-H1OSWto7KWzP4ZdRpvZk&per_page=20`
    );
    const data = await response.data;
    setPhotos(data);
    setLoading(false);
  };

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(formData);
  };

  const pageChange = (event, value) => {
    setpage(value);
    fetchData(formData, value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return;
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress size={130} />
  </div>;

  return (
    <>
      <div className="container mt-4">
        <SearchBar change={handleChange} submit={handleSubmit} />
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
        >
          <Pagination
            page={page}
            onChange={pageChange}
            count={10}
            size="large"
          />
        </div>

        <ImageList images={photos.results} />
      </div>
    </>
  );
};

export default App;
