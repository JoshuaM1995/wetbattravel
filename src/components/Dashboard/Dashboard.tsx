import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import {Field, FieldProps, Form, Formik} from 'formik';
import './Dashboard.scss';
import {TransportationType} from '../../utils/enums';

interface InitialQuoteValues {
  from: string;
  destination: string;
  depart_date: string;
  return_date: string;
  people: number;
  transportation: TransportationType;
  name: string;
}

const initialValues: InitialQuoteValues = {
  from: '',
  destination: '',
  depart_date: '',
  return_date: '',
  people: 1,
  transportation: TransportationType.PLANE,
  name: '',
};

const createQuote = (values: InitialQuoteValues) => {
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

            <Formik initialValues={initialValues} onSubmit={createQuote}>
              {() => (
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Field name="from">
                        {({field}: FieldProps) => (
                          <TextField
                            {...field}
                            label="From"
                            variant="outlined"
                          />
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field name="destination">
                        {({field}: FieldProps) => (
                          <TextField
                            {...field}
                            label="Destination"
                            variant="outlined"
                          />
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field name="depart_date">
                        {({field}: FieldProps) => (
                          <TextField
                            {...field}
                            label="Depart Date"
                            type="datetime-local"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                          />
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field name="return_date">
                        {({field}: FieldProps) => (
                          <TextField
                            {...field}
                            label="Depart Date"
                            type="datetime-local"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                          />
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field name="people">
                        {({field}: FieldProps) => (
                          <>
                            <InputLabel id="label-people">People</InputLabel>
                            <Select
                              {...field}
                              label="People"
                              labelId="label-people"
                              variant="outlined"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num: number) => (
                                <MenuItem value={num} key={num}>{num}</MenuItem>
                              ))}
                            </Select>
                          </>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <InputLabel id="label-transportation">Transportation</InputLabel>
                      <Field name="transportation">
                        {({field}: FieldProps) => (
                          <Select
                            {...field}
                            label="Transportation"
                            labelId="label-transportation"
                            variant="outlined"
                          >
                            {Object.values(TransportationType).map((transportationType: string, key: number) => (
                              <MenuItem value={transportationType} key={key}>{transportationType}</MenuItem>
                            ))}
                          </Select>
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field name="name">
                        {({field}: FieldProps) => (
                          <TextField
                            {...field}
                            label="Name"
                            variant="outlined"
                          />
                        )}
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Button type="submit" variant="contained" color="primary" disableElevation>
                        Create a quote
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} md={6}>
        <Paper>xs=6</Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
