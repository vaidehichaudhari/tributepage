
import './App.css'
import HeaderRS from './components/HeaderRS.jsx'
import headerimage from './assets/rs.jpeg'
import Achievment from './components/Achievment.jsx'
import ImageGallary from './components/ImageGallary.jsx'
function App() {

  return (
    <>
      <HeaderRS/>
      <img src={headerimage} alt="image not showing" className="imageclass"/>
<Achievment/>
<ImageGallary/>
    </>
  )
}

export default App