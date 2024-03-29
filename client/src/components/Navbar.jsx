import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/lynlogo.png";
import {
  AppBar,
  Button,
  Typography,
  Box,
  Menu,
  IconButton,
  InputBase,
  Toolbar,
  MenuItem,
  useTheme,
} from "@mui/material";

// note: the occupation and username isnt showing by the icons on the side or nav bar  

const Navbar = ({ 
  user,
  isSidebarOpen,
  setIsSidebarOpen,
  }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null) // for menu dropdown opening and closing 
  const isOpen = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen( !isSidebarOpen )}>
            <MenuIcon />
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </IconButton>
        </FlexBetween>
               {/* RIGHT SIDE */}
               <FlexBetween gap= "1.5rem"> 
               <IconButton onClick={() => dispatch(setMode())}> 
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{fontSize: "25px"}} /> 
                    ) : (
                        <LightModeOutlined sx={{fontSize: "25px"}} /> 
                    )
                    }
               </IconButton> 
                <IconButton>
                    <SettingsOutlined sx={{fontSize: "25px"}} /> 
               </IconButton>
               <FlexBetween>
                <Button onClick={handleClick} sx={{display: "flex", justifyContent: "space-between", alignItems: "center", textTransform:"none", gap:"1rem"}}>
                <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="30px"
                width="30px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
                <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
                </Box>

                <ArrowDropDownOutlined
                sx={{color: theme.palette.secondary[300], fontSize:"25px" }}
                />
             
                </Button>
                <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal:"center" }}>
                  <MenuItem onClick={handleClose} disableRipple> <a target="_blank" href="https://login.bigcommerce.com/login">BigCommerce</a></MenuItem>
                  
                  <MenuItem onClick={handleClose} disableRipple>Log Out</MenuItem>
                </Menu>
               </FlexBetween>
               </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
