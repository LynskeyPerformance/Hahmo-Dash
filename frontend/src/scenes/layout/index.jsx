import React, { useState} from 'react';
import { Box, useMediaQuery } from '@mui/material'; 
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import Navbar from "components/Navbar"; 
import Sidebar from "components/Sidebar"
 
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); {/* gives boolean if the min-width is acheived on users screen */}
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return <Box display={isNonMobile ? "flex" : "block"} width ="100%" height="100%">
    <Sidebar 
    isNonMobile = {isSidebarOpen}
    drawerWidth = "250px"
    isSidebarOpen = {isSidebarOpen}
    setIsSidebarOpen = {setIsSidebarOpen}
    /> 
<Box>
  {/* gives the functionality of opening and closing sidebar */}
    <Navbar 
     isSidebarOpen = {isSidebarOpen}
     setIsSidebarOpen = {setIsSidebarOpen}
    /> 

    <Outlet /> 
</Box>
  </Box>
  
}

export default Layout