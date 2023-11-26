import React, { useState } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";

import SearchPage from "./SearchPage";
import UserProfileSetup from "./UserProfileSetup";
import PostRegistration from "./PostRegistration";
import Indivisual from "./FindWorkIndivisual";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hire" element={<SearchPage />} />
        <Route path="/userprofilesetup" element={<UserProfileSetup />} />
        <Route path="/indivisual" element={<Indivisual />} />
        <Route path="/postregistration" element={<PostRegistration />} />
      </Routes>
    </>
  );
}
