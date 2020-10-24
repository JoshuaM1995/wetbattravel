import React from 'react';
import {Card, CardContent, Grid, Paper, Typography} from '@material-ui/core';
import './Dashboard.scss';
import {TransportationType} from '../../utils/enums';
import QuickQuoteForm from './QuickQuoteForm';
import {InitialQuoteFormValues} from '../../utils/interfaces';
import PendingQuotesTable from "./PendingQuotesTable";

const initialValues: InitialQuoteFormValues = {
  from: '',
  destination: '',
  depart_date: '',
  return_date: '',
  people: 1,
  transportation: TransportationType.PLANE,
  name: '',
};

const createQuote = (values: InitialQuoteFormValues) => {
  console.log('Submit form', values);
};

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={6}>
        <Card className="card-quick-quote" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Quick Quote
            </Typography>

            <QuickQuoteForm initialValues={initialValues} onSubmit={createQuote} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={12} md={6}>
        <Card className="card-quick-quote" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Pending Quotes
            </Typography>

            <PendingQuotesTable />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
