import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { dataEmployees } from '../../datas/employees';
import './MaterialTable.css';
//nested data is ok, see accessorKeys in ColumnDef below

export const DataTable = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'startDate', //normal accessorKey
        header: 'Start Date',
      },
      {
        accessorKey: 'department', //normal accessorKey
        header: 'Department',
      },
      {
        accessorKey: 'dateOfBirth', //normal accessorKey
        header: 'Date of Birth',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'zipCode', //normal accessorKey
        header: 'Zip Code',
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={dataEmployees} />;
};
