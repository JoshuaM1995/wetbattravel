import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Quote } from '../../../api/entities/Quote';
import {Link} from "react-router-dom";

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CAD'
});

interface PendingQuotesTableProps {
  tableRows: any[];
}

const PendingQuotesTable = ({ tableRows }: PendingQuotesTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID #</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row: Quote) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.depart_destination}</TableCell>
              <TableCell>{currencyFormatter.format(row.price)}</TableCell>
              <TableCell>
                <Link to={`/quote/${row.id}`}>
                  <VisibilityIcon color="primary" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PendingQuotesTable;
