import './App.css';
import './components/ProductTable';
import ProductTable from './components/ProductTable';

const products = [
  {no: 1, name: 'A', quantity: 10, price: 10},
  {no: 2, name: 'AB', quantity: 3, price: 12},
  {no: 3, name: 'ABC', quantity: 11, price: 14},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Products</h3>
      <ProductTable products={products}/>
      </header>
    </div>
  );
}

export default App;
