// import React from 'react';
// import { Routes, Route } from 'react-router-dom'; // No need for Router, just Routes and Route
// import Layout from '../layout/Layout';
// import Login from '../components/login/Login';
// import ViewAds from '../user/pages/ViewAds';
// import All from '../admin/pages/All';
// import AdminSidebar from '../admin/components/AdminSidebar';
// import AdminDashboard from '../admin/pages/AdminDashboard';
// import AddAdvertisement from '../admin/pages/AddAdvertisement';
// import UserSidebar from '../user/components/UserSidebar';

// import { Layout } from "lucide-react";
import Login from "../components/login/Login";
import AdminSidebar from "../admin/components/AdminSidebar";
import AdminDashboard from "../admin/pages/AdminDashboard";
import All from "../admin/pages/All";
import AddAdvertisement from "../admin/pages/AddAdvertisement";
import ViewAds from "../user/pages/ViewAds";
import UserSidebar from "../user/components/UserSidebar";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import UserDashboard from "../user/pages/UserDashboard";

const Routing = () => {
  return (
    <Routes>
      {/* Wrapping all routes under the Layout component */}
      <Route path='/' element={<Layout />}>
        {/* Default route */}
        <Route index element={<Login />} />

        {/* Login route */}
        <Route path='login' element={<Login />} />

        {/* Sidebar layout for admin */}
        <Route path='/' element = {<AdminSidebar />}>

        {/* admin dashboard  */}
        <Route path='admin-dashboard' element = {<AdminDashboard />}/>

        {/* All advertisements */}
        <Route path='all' element={<All />} />

        {/* Add advertisement route */}
        <Route path='add' element={<AddAdvertisement />} />
        </Route>

        {/* Sidebar layout for user */}
        <Route path='/' element={<UserSidebar />}>
          {/* User Dashboard inside the sidebar */}
          <Route path='userdashboard' element={<UserDashboard />} />

          {/* view add  */}
          <Route path='viewad' element = {<ViewAds />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
