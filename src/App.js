import { useEffect, useState } from "react";
import News from "./News";
import "./App.css";

const currdate = new Date();
currdate.setDate(currdate.getDate() - 5);

let day = currdate.getDate();
let month = currdate.getMonth() + 1;
let year = currdate.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate);
function App() {
  const [query, setQuery] = useState("india");
  const [inputText, setInputText] = useState("");
  const [article, setArticle] = useState([]);

  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=${date}&apiKey=${NEWS_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, date]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputText);
  };
  return (
    <div className="main-div">
      <h1>NewsApp</h1>
      <div className="container">
        <div className="row">
          <div className=" col-sm-10 offset-sm-1 offset-lg-3 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className="input-group ">
                  <span className="input-group-text" id="basic-addon1">
                    Search Any News
                  </span>
                  <input
                    type="text"
                    value={inputText}
                    className="form-control"
                    placeholder="type here..."
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                  />
                </div>
                <button className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="news-items">
        {article ? (
          article.map((news, index) => {
            if (news.author) {
              return <News key={index} news={news} />;
            }
            return null;
          })
        ) : (
          <h1>Nothing Found</h1>
        )}
      </div>
    </div>
  );
}

export default App;
