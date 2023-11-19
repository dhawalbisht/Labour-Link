import React from 'react'
import Form from '../components/Form'
// import Footer from '../Pages/Footer'

function LoginPage({ isLogin, setIsLogin }) {
    return (
        <>
            <Form isLogin={isLogin} setIsLogin={setIsLogin} />
            {/* <Footer/> */}
        </>
    )
}

export default LoginPage;