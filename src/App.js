import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Pages from './pages/Pages';

function App() {
  return (
    <div className=' overflow-x-hidden'>
      <Home/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
