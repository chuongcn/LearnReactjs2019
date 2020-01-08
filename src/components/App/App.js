import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import Slider from './Slider/Slider';
import Content from './Content/Content';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div class="col-lg-3">
            <Category />
          </div>
          <div className="col-lg-9">
            <Slider />
            <Content />        
          </div>         
        </div>      
      </div>
      <Footer />
    </div>
  );
}

export default App;
