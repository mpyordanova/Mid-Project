import React from 'react'
// import {useNavigate} from 'react-router-dom'

const Author = ({apiResponse}) => {
    return(
        <div className='author'>
        {
            apiResponse?.results?.map((author)=> {
                return (
                    <div key={author.name}>
                        <h2>{author.name}</h2>
                    </div>
                )
            })
        }
        </div>
    )
}






export default Author