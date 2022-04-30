import './App.css';
import ProductGet from './components/productGet';
import SearchProduct from './components/searchProduct';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <SearchProduct />
       <ProductGet />
      
    </div>
  );
}

export default App;
