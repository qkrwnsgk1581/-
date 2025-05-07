import './App.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Count from './Count';
import Login from './Login';

function App() {
  const navigate = useNavigate();

  const Button = (props) => {
    return(
      <button onClick={props.onClick}>
        *{props.text}*
       </button>
    )
  }
  
  const handleClick = () => {
    alert("이걸 누르다니...");
  }
  return (
    <div className="App">
      {/* <nav className='navbar'>
        <ul>
          <li><Button onClick={() => navigate('/')}>홈</Button></li>
          <li><Button onClick={() => navigate('/about')}>소개</Button></li>
          <li><Button onClick={() => navigate('/contact')}>연락처</Button></li>
        </ul>
      </nav> */}

      <div className="App">
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/count' element={<Count />} />
          <Route path='/home' element={<Home />} />       
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}


export default App;
