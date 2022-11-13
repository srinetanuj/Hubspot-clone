
import './App.css';
// import ResourcesPage from './Navbar/Navbar2/ResourcesPage';
// import SoftwarePage from './Navbar/Navbar2/SoftwarePage';
import Navbar from './Navbar/Navbar';
// import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <HomePage/>
      {/* <SoftwarePage/> */}
      {/* <ResourcesPage/> */}
    </div>
  );
}

export default App;
