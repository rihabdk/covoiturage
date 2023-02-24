import React, { useState } from 'react';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import { Navbar, Nav } from 'react-bootstrap';

function Test() {
  const [tableData, setTableData] = useState([
    {  email: "Raj@talan.com", phone: 94561230, from: "Talan", to: "Ariana", Date: "25.02.2023",Time: "11:53:37", fee: 7 },
   
 
  ])
  const columns = [
    
    { title: "Email", field: "email", type: "mail",filterPlaceholder: "filter" },
    { title: "Phone Number", field: "phone",type: "number", align: "center", grouping: false },
    { title: "From", field: "from", sorting: false, filtering: true, headerStyle: { color: "#fff" } },
    { title: "To", field: "to", sorting: false, filtering: true, headerStyle: { color: "#fff" } },

    {title: "Date", field: "Date", type: "date" ,sorting: false, filtering: true},
    { title: "Time", field: "Time", type: "time",filterPlaceholder:"filter" },
    { title: "Fees", field: "fee", type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
  ]
  return (
    
    <div >
       <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <h1 align="center">Carpooling-App</h1>

      <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])

            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Available rides "
        icons={{ Add: () => <AddIcon /> }} />
    </div>
    
  );
}

export default Test;