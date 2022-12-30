import Row from './components/Row';
import './App.css';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Nav/>     
      </header>
      <Banner  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Originals" 
      isLargeRow={true}
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="fetchTrending" fetchUrl={requests.fetchTrending}/>
      <Row title="fetchTopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="fetchActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="fetchComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="fetchHorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="fetchRomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="fetchDocumentaries" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
 