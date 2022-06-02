import axios from 'axios'
import './App.css';
import Home from './components/Home';
import Title from './components/Title';
import Author from './components/Author';
import { useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [apiResponse, setApiResponse] = useState({});
  const [formData, setFormData] = useState({
    search:"",
    type: "title"
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      const response = await axios.get(`http://openlibrary.org/search.json?${formData.type}=${formData.search}`)
      setApiResponse(response.data)
      navigate(`/${formData.type}`)
    }catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event)=> {
    setFormData({...formData, [event.target.name]:event.target.value})
  }
  return (
    <div className="App">
<Routes>
        <Route path='/' element={<Home handleSubmit={handleSubmit} handleChange={handleChange} />} />
        <Route path='/title' element={<Title apiResponse={apiResponse} />} />
        <Route path='/authors' element={<Author apiResponse={apiResponse}/>} />
      </Routes>

      
    </div>
  );
}

export default App;


// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>