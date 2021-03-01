import './App.css';
import Header from './components/header/Header';
import Menu from  './components/menu/Menu';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="middle-page">
        <Menu />
        <h1>content</h1>
      </div>

      <Footer />

    </div>
  );
}

export default App;
