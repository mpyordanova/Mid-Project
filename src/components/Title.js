import React from 'react'
import { useNavigate } from 'react-router-dom'

const Title = ({ apiResponse }) => {
    console.log(apiResponse)
    return (
        <div className='title'>
            {
                apiResponse?.results?.map((title)=> {
                    return (
                        <div key={title.name}>
                            <h2>{title.name}</h2>
                            <img src={title.url}/>
                         </div>
                    )
                })
            }
        </div>
    )
}






export default Title