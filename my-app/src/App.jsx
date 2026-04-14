import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './componets/Header/Header'
import ProductGallery from './componets/ProductGallery/ProductGallery'
import { product } from './data/product.js'

function App() {
const [currentIndex,setCurrentIndex]=useState(0);

  return (
    <div style={{width:"100%",minHeight:"100vh"}}>
        <Header></Header>
        <div>
          <div>
          <ProductGallery
          images={product.images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}/>
          </div>
        </div>
       
    </div>
    
   
  );
}

export default App
