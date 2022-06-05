import axios from 'axios'
import './App.css';
import Home from './components/Home';
import Book from './components/Book';
import Author from './components/Author';
import { useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom'
import logo from './Book2.jpeg'

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
      console.log(`http://openlibrary.org/search.json?${formData.type}=${formData.search}`)
      const response = await axios.get(`http://openlibrary.org/search.json?${formData.type}=${formData.search}`)
      setApiResponse(response.data)
      navigate(`/${formData.type}`)
    }catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value});
  }
  return (
    <div className="App">
       <header className="App-header">
        
        <div className='left-container'><img src={logo} className="App-logo" alt="logo" /></div>
          <div className='right-container'>
          <div className='top'>"A mind needs books like a sword needs a whetstone, if it is to keep its edge."</div><br/>
         <div className='bottom'>- George R.R. Martin, A Game of Thrones</div>
         </div>
         </header>
<Routes>  
        <Route path='/' element={<Home handleSubmit={handleSubmit} handleChange={handleChange} />} />
        {/* <Route path='/book' element={<Book apiResponse={apiResponse} />} /> */}
        <Route path='/title' element={<Book apiResponse={apiResponse} />} />
        <Route path='/author' element={<Author apiResponse={apiResponse}/>} />
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