import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const Book = ({ apiResponse }) => {
    console.log(apiResponse)
    const [books, setBooks] = useState ([])
    const [seed, setSeed] = useState('')
    const createBookURL = async (seed) => {
        window.open(`http://openlibrary.org${seed}`)
        // window.open sends us to the new page in a new tab
    }
    return (
        <div className='title'>
            {
                apiResponse?.docs?.map((book, index)=> {
                    return (
                        <div key={index} className="book-card">
                            <h2>{book.title}</h2>
                            <h2>{book.author}</h2>
                            <button onClick ={()=> createBookURL(book.seed[0])}>Open book</button>
                        

                         </div>
                    )
                })
            }
        </div>
    )
}

// Pass seed[0] as a prop to a new page.
// That page is the information about one specific book.
// You can use `http://openlibrary.org${seed}` (or whatever you decide to call it) to get the information about one specific thing




export default Book