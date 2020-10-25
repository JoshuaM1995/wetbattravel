import React from 'react';
import {Card, CardContent, CardHeader, Chip, Grid, Paper, Typography} from '@material-ui/core';
import useApiRequest from "../../hooks/useApiRequest";
import {ApiMethod} from "../../utils/enums";
import {useParams} from "react-router";
import {QuoteResponse} from '../../../api/interfaces/quotes';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import currencyFormatter from "../../utils/currencyFormatter";
import './ViewQuote.scss';
import moment from 'moment';

const dateFormat = 'MMMM Do, YYYY';

const ViewQuote = () => {
  const {id} = useParams<any>();
  const {response: quoteResponse} = useApiRequest<QuoteResponse>(`/quote/${id}`, ApiMethod.GET);

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={8}>
        <Card variant="outlined">
          <CardHeader
            title={<><ReceiptOutlinedIcon fontSize="large"/>Quote Details</>}
            titleTypographyProps={{color: 'primary'}}
          />
          <CardContent>
            <Paper elevation={0} className="quote-detail">
              <Typography variant="h5">Flight Information</Typography>
              <br/>
              <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                  <Typography variant="body1">Depart From: {quoteResponse?.data?.quote.depart_origin}</Typography>
                  <Typography variant="body1">
                    Departure Time: {moment(quoteResponse?.data?.quote.origin_datetime).format(dateFormat)}
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography variant="body1">Arrive At: {quoteResponse?.data?.quote.depart_destination}</Typography>
                  <Typography variant="body1">
                    Arrival Time: {moment(quoteResponse?.data?.quote.destination_datetime).format(dateFormat)}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <br/>

            <Paper elevation={0} className="quote-detail">
              <Typography variant="h5">Booking Information</Typography>
              <br/>
              <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                  <Typography variant="body1">Name: {quoteResponse?.data?.quote.name}</Typography>
                </Grid>

                <Grid item sm={12} md={6}>
                  <Typography variant="body1">Number of People: {quoteResponse?.data?.quote.number_people}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} md={4}>
        <Card variant="outlined" className="quote-pricing">
          <CardHeader
            title={
              <>
                <AttachMoneyOutlinedIcon fontSize="large"/>
                Quote Pricing
              </>
            }
            titleTypographyProps={{color: 'primary'}}
          />
          <CardContent>
            <Typography variant="body1">
              Based on the average cost of flights, the price to fly between {quoteResponse?.data?.quote.depart_origin}
              {' '} and {quoteResponse?.data?.quote.depart_destination} is {' '}
              <Chip label={<b>{currencyFormatter.format(quoteResponse?.data?.quote.price ?? 0)}</b>}/>
              {' '} on average.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ViewQuote;
