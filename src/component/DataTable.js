
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'



const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },



]


function DataTable() {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    })
    return (
        <div style={{ height: 600, width: 1365 }}>
            <DataGrid

                rows={tableData}
                columns={columns}
                pageSize={10}
                checkboxSelection


            />
        </div>
    )
}

export default DataTable;
