import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import '../../assets/scss/main.scss'



const LayoutWrapper = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>

)

export default LayoutWrapper