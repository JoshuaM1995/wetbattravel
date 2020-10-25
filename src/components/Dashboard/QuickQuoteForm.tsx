import React from 'react';
import {TransportationType} from "../../utils/enums";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import {Field, FieldProps, Form, Formik, FormikProps} from "formik";
import {InitialQuoteFormValues} from '../../utils/interfaces';
import createQuoteSchema from "../../validation/createQuoteSchema";

interface QuickQuoteProps {
  initialValues: InitialQuoteFormValues;
  onSubmit: any;
  formSubmitted: boolean;
}

const QuickQuoteForm = ({initialValues, onSubmit}: QuickQuoteProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createQuoteSchema}
    >
      {({errors, touched}: FormikProps<InitialQuoteFormValues>) => {
        return (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field name="origin">
                  {({field}: FieldProps) => (
                    <>
                      <TextField
                        {...field}
                        error={!!(errors.origin && touched.origin)}
                        label="From"
                        variant="outlined"
                      />
                      {(errors.origin && touched.origin) && <FormHelperText error>{errors.origin}</FormHelperText>}
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="destination">
                  {({field}: FieldProps) => (
                    <>
                      <TextField
                        {...field}
                        error={!!errors.destination && touched.destination}
                        label="Destination"
                        variant="outlined"
                      />
                      {(touched.destination && errors.destination) &&
                      <FormHelperText error>{errors.destination}</FormHelperText>
                      }
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="depart_datetime">
                  {({field}: FieldProps) => (
                    <>
                      <TextField
                        {...field}
                        error={!!errors.depart_datetime && touched.depart_datetime}
                        label="Depart Date"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                      {(touched.depart_datetime && errors.depart_datetime) &&
                      <FormHelperText error>{errors.depart_datetime}</FormHelperText>
                      }
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="return_datetime">
                  {({field}: FieldProps) => (
                    <>
                      <TextField
                        {...field}
                        error={!!errors.return_datetime && touched.return_datetime}
                        label="Return Date"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                      {(touched.return_datetime && errors.return_datetime) &&
                      <FormHelperText error>{errors.return_datetime}</FormHelperText>
                      }
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="number_people">
                  {({field}: FieldProps) => (
                    <FormControl error={!!errors.number_people && touched.number_people}>
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
                      {(touched.number_people && errors.number_people) &&
                      <FormHelperText error>{errors.number_people}</FormHelperText>
                      }
                    </FormControl>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl error={!!errors.transportation && touched.transportation}>
                  <InputLabel id="label-transportation">Transportation</InputLabel>
                  <Field name="transportation">
                    {({field}: FieldProps) => (
                      <>
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
                        {(touched.transportation && errors.transportation) &&
                        <FormHelperText error>{errors.transportation}</FormHelperText>
                        }
                      </>
                    )}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="name">
                  {({field}: FieldProps) => (
                    <>
                      <TextField
                        {...field}
                        error={!!errors.name && touched.name}
                        label="Name"
                        variant="outlined"
                      />
                      {(touched.name && errors.name) &&
                      <FormHelperText error>{errors.name}</FormHelperText>
                      }
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  className="create-a-quote"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disableElevation
                >
                  Create a quote
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default QuickQuoteForm;
