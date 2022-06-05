import React from 'react'
import {useNavigate} from 'react-router-dom'

const Author = ({apiResponse}) => {
    console.log(apiResponse)
    return(
        <div className='author'>
        {
            apiResponse?.docs?.map((authors, index)=> {
                return (
                    <div key={index}>
                        <h2>{authors.name}</h2>
                    </div>
                )
            })
        }
        </div>
    )
}






export default Author