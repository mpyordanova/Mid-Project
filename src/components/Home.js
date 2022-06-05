import React, {useState} from "react";
import axios from "axios"

const Home = (props) => {

    return (
      <div className='box'>
       
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="search">Search Book by:</label><br/>
          <select id="type" name="type" onChange={props.handleChange} >
            <option value="title" >Title</option>
            <option value="authors" >Author</option>
          </select>
          <input type="text" id="search" name="search" onChange={props.handleChange} />
           <input type="submit" />
           
        </form>
      </div>
    )
  }






export default Home