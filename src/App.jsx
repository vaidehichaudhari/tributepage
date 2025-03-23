
import './App.css'
import HeaderRS from './components/HeaderRS.jsx'
import headerimage from './assets/rs.jpeg'
import Achievment from './components/Achievment.jsx'
import ImageGallary from './components/ImageGallary.jsx'
import Footer from './components/Footer.jsx'
import Info from './components/Info.jsx'
function App() {

  return (
    <>
      <HeaderRS />
     
      <img src={headerimage} alt="image not showing" className="imageclass" />
      <Info />
      <Achievment />
      <ImageGallary />

      <Footer />
    </>
  )
}

export default App