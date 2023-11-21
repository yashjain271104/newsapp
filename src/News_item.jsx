export default function News_item(props) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "19.8rem",
          height: "25rem",
          margin: "0px 10px 50px 10px",
        }}
      >
        <div className="div-padding" style={{ padding: "10px 5px 0px 10px" }}>
          <img
            className="card-img-top"
            src={props.apiKey.urlToImage}
            alt="Card image cap"
            style={{ height: "25vh", width: "19.5vw" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.apiKey.title.slice(0, 45)}</h5>
            <p className="card-text">{props.apiKey.content.slice(0, 100)}</p>
            <a href={props.apiKey.url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
