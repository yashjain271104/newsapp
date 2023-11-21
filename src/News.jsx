import { useState, useEffect } from "react";
import News_item from "./News_item";

export default function News(props) {
  const [Data, setData] = useState(null);
  let [Page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const api = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-17&sortBy=publishedAt&apiKey=0b77dd58a2f34428acc2453283b7f63a&pageSize=${props.pageSize}&page=${Page}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const jsonData = await response.json();
      setTotalResults(jsonData.totalResults);
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handlePrevious = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-17&sortBy=publishedAt&apiKey=0b77dd58a2f34428acc2453283b7f63a&page=${
      Page - 1
    }&pageSize=${props.pageSize}`;
    let moreData = await fetch(url);
    let parsedData = await moreData.json();
    setPage(Page - 1);
    setData(parsedData);
  };

  const handleNext = async () => {
    if (totalResults === null) {
    } else {
      if (Page + 1 > Math.ceil(totalResults / 28)) {
      } else {
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-17&sortBy=publishedAt&apiKey=0b77dd58a2f34428acc2453283b7f63a&page=${
          Page + 1
        }&pageSize=${props.pageSize}`;
        let moreData = await fetch(url);
        let parsedData = await moreData.json();
        setPage(Page + 1);
        setData(parsedData);
      }
    }
  };

  if (Data === null) {
    return <h1>Loading...</h1>;
  } else {
    if (Data.articles === undefined) {
      return (
        <>
          <h1 className="my-5">No more News</h1>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handlePrevious}
            disabled={Page <= 1}
            style={{ margin: "60vh 0vw 0vh 5vw" }}
          >
            &larr; Previous
          </button>
        </>
      );
    } else {
      return (
        <>
          <div
            className="adjusting-div"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              position: "relative",
              top: "15vh",
            }}
          >
            {" "}
            {Data.articles.map((article) => {
              return (
                <div key={article.url}>
                  <News_item apiKey={article} />
                </div>
              );
            })}
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ margin: "15vh 5vw 0vh 5vw" }}
          >
            <button
              type="button"
              className="btn btn-dark"
              onClick={handlePrevious}
              disabled={Page <= 1}
            >
              &larr; Previous
            </button>
            <button type="button" className="btn btn-dark" onClick={handleNext}>
              Next &rarr;
            </button>
          </div>
        </>
      );
    }
  }
}
