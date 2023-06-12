import React from 'react'
import './homepage.scss'
import { Header } from '../../containers'
import { Footer, News } from '../../components'

export const Homepage = () => {
    return (
        <>
            <Header />
            <News />
            <Footer />
        </>
    )
}
