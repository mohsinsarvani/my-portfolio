import React from 'react'
import '../../assets/scss/main.scss'
import Background from '../Background/Background'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const LayoutWrapper  = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)

export default LayoutWrapper