
import './App.css'
import HeaderRS from './components/HeaderRS.jsx'
import headerimage from './assets/rs.jpeg'
import Achievment from './components/Achievment.jsx'
function App() {

  return (
    <>
      <HeaderRS/>
      <img src={headerimage} alt="image not showing" className="imageclass"/>
<Achievment/>
    </>
  )
}

export default App