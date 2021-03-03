import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="middle-page">
        <Menu />
      </div>

      <Footer />
      <h5 style={{ backgroundColor: '#545454', margin: '0', padding: '1rem auto', color: '#f9f9f9' , border: '1px solid #233223' }}>All Rights Reserved to Ammar Mohammed BaOmeir</h5>
    </div>
  );
}

export default App;
