import React, { useState } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { Route, Routes } from 'react-router-dom'

import SearchPage from './SearchPage'
import UserProfileSetup from './UserProfileSetup'
import PostRegistration from './PostRegistration'

import Indivisual from './FindWorkIndivisual'

export default function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />} />
            
                <Route path="/hire" element={<SearchPage />}></Route>
                <Route path="/userprofilesetup" element={<UserProfileSetup />}></Route>
                <Route path="/indivisual" element={<Indivisual />}></Route>
                <Route path="/postregistration" element={<PostRegistration />}></Route>
            </Routes >
        </>
    )
}
