import React from 'react'

import Header from './Header'
import SlickHeader from './SlickHeader'
import Body from './Body'
export const Home = () =>{
    return (
        <div className="container pt-3">
            <Header />
            <SlickHeader />
            <Body />
        </div>
    )
}

export default Home