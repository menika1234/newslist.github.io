import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
function NewsList() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=03e8578b9f6b4baab2f13bf694bd1407"
      )
      .then((res) => {
        setNews(res?.data?.articles);
      });
  }, []);
  return (
    <div className="container my-3">
      <div className="row text-center">
        {news.map((list) => {
          return (
            <div className="col">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src={list.urlToImage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{list.title}</h5>
                  <p className="card-text">{list.description}</p>
                  <button type="button" className="btn btn-link">
                    <a href={list.url} className="card-link">
                      View Details
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NewsList;
