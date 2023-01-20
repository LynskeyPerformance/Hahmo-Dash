import React, { useState } from 'react'
import { DataGrid } from "@mui/x-data-grid"
import { useGetTransactionsQuery } from 'state/api'
import Header from "components/Header"
import {
    useTheme
} from "@mui/material";

const Transactions = () => {
const theme = useTheme();
  
    // values sent to the backend 

    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(20)
    const [sort, setSort] = useState({})
    const [search, setSearch] = useState("")
  return (
    <div>Transactions</div>
  )
}

export default Transactions