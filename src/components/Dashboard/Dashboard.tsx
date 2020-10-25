import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardHeader, Grid, Snackbar} from '@material-ui/core';
import './Dashboard.scss';
import {ApiMethod, TransportationType} from '../../utils/enums';
import QuickQuoteForm from './QuickQuoteForm';
import {InitialQuoteFormValues} from '../../utils/interfaces';
import PendingQuotesTable from "./PendingQuotesTable";
import useApiRequest from "../../hooks/useApiRequest";
import {QuotesResponse} from "../../../api/interfaces/quotes";
import {Quote} from "../../../api/entities/Quote";
import apiRequest from "../../utils/apiRequest";
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import {Alert} from "@material-ui/lab";

const initialValues: InitialQuoteFormValues = {
  depart_origin: '',
  depart_destination: '',
  origin_datetime: '',
  destination_datetime: '',
  number_people: 1,
  transportation: TransportationType.CAR,
  name: '',
};

const Dashboard = () => {
  const [ tableRows, setTableRows ] = useState<Quote[]>([]);
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const { response: quoteResponse } = useApiRequest<QuotesResponse>('quotes', ApiMethod.GET);

  useEffect(() => {
    // If the api request returned data, use it to set the table rows
    if (quoteResponse?.data) {
      setTableRows(quoteResponse.data.quotes);
    }
  }, [quoteResponse]);

  const createQuote = (values: InitialQuoteFormValues) => {
    apiRequest('quote', ApiMethod.POST, values).then((response) => {
      setTableRows((tableRows: any) => {
        // Remove the last item from the table to make room for the new one
        tableRows.pop();

        // Append the newly created quote to the table
        return [
          ...[response.data],
          ...tableRows,
        ];
      });
      setFormSubmitted(true);
    }).catch(() => {
      setShowErrorAlert(true);
    });
  };

  return (
    <Grid container spacing={3}>
      <Snackbar
        color="error"
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={showErrorAlert}
        onClose={() => setShowErrorAlert(false)}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          There was an error when trying to create your quote. Please try again.
        </Alert>
      </Snackbar>

      <Grid item sm={12} md={6}>
        <Card className="card-quick-quote" variant="outlined">
          <CardHeader
            title={<><FastForwardOutlinedIcon fontSize="large" />Quick Quote</>}
            titleTypographyProps={{ color: 'primary' }}
          />
          <CardContent>
            <QuickQuoteForm
              initialValues={initialValues}
              onSubmit={createQuote}
              formSubmitted={formSubmitted}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item sm={12} md={6}>
        <Card className="card-pending-quotes" variant="outlined">
          <CardHeader
            title={<><HistoryOutlinedIcon fontSize="large" />Pending Quotes</>}
            titleTypographyProps={{ color: 'primary' }}
          />
          <CardContent>
            <PendingQuotesTable tableRows={tableRows} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
