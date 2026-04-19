import { useState } from 'react'
import './App.css'
import Header from './componets/Header/Header'
import ProductGallery from './componets/ProductGallery/ProductGallery'
import { product } from './data/product.js'
import ProductInfo from './componets/ProductInfo/ProductInfo.jsx'
import Footer from './componets/Footer/Footer.jsx'

function App() {
const [currentIndex,setCurrentIndex]=useState(0);

  return (
    <div style={{width:"100%",minHeight:"100vh",background:"#24262d"}}>
        <Header></Header>
        <div style={{maxWidth:"1400px",margin:"0 auto",padding:"30px 20px",display:"flex"}}>
          <div className='product-grid'>
          <ProductGallery
          images={product.images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}/>
          </div>
          <ProductInfo
          title={product.title}
          description={product.description}
          price={product.price}
          specs={product.specs}
          colors={product.colors}/>
        </div>
       <Footer/>
    </div>
    
   
  );
}

export default App
