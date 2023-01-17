import React from 'react'
import { Box, useTheme } from "@mui/material"
import { useGetCustomersQuery } from 'state/api'
import Header from "components/Header"
import { DataGrid } from '@mui/x-data-grid'

const Customers = () => {
    const theme = useTheme(); //bc we need colors 
    const { data, isLoading } = useGetCustomersQuery(); 

  return (
    <div>Customers</div>
  )
}

export default Customers