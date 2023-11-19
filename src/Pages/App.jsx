import React, { useState } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { Route, Routes } from 'react-router-dom'
import FindWork from './FindWork'
import SearchPage from './SearchPage'
import Agency from './FindWorkAgency'

import Indivisual from './FindWorkIndivisual'

export default function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path="/findwork" element={<FindWork />}></Route>
                <Route path="/hire" element={<SearchPage />}></Route>
                <Route path="/agency" element={<Agency />}></Route>
                <Route path="/indivisual" element={<Indivisual />}></Route>
            </Routes >
        </>
    )
}
