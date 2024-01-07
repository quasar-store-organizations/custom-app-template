import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    console.log('location', location)
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [navigate])

    return (
        <>
            <h1>404</h1>
            <p>This {location.pathname} page could not be found.</p>
        </>
    )
}

export default NotFound