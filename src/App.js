import "./App.css";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className='App'>
      <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
      ></Row>
      <Row title='Trending Now' fetchURL={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
