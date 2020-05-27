import React from 'react'
import {Link} from 'react-router-dom'
import './ErrorPage.css'
export const ErrorPage = ({clicked}) => {
    return (
        <center>
            <h1 style={{fontSize:'100px'}}>Error 404</h1>
            <h2 style={{fontSize:'70px'}}>This page not found!</h2>
            <br/>
            <br/>
            <br/>
            <Link 
                onClick={clicked}
                to="/player" 
                className='PlayerLink'>Player link</Link>
        </center>
    )
}
