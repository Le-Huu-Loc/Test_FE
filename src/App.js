import './App.css';
import Banner from './components/Banner';
import BestProduct from './components/BestProduct';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import Happened from './components/Happened';
import Header from './components/Header';
import Products from './components/Products';
import Video from './components/Video';

function App() {


  return (
    <div className="App">
      <Header />
      <Banner />
      <BestProduct />
      <Products />
      <BrandStory />
      <Happened />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
