import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className='app'>
      <Banner></Banner>
      <Nav></Nav>
      <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title='Trending Now' fetchURL={requests.fetchTrending}></Row>
      <Row title='Top Rated' fetchURL={requests.fetchTopRated}></Row>
      <Row title='Action movies' fetchURL={requests.fetchActionMovies}></Row>
      <Row title='Comedy movies' fetchURL={requests.fetchComedyMovies}></Row>
      <Row title='Horror movies' fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
