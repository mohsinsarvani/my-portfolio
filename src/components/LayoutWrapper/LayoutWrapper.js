import React from 'react'
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