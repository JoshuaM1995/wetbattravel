import React, {useEffect, useState} from 'react';
import {TransportationType} from "../../utils/enums";
import {
  Button, FormControl, FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select, Snackbar,
  TextField,
} from '@material-ui/core';
import {Field, FieldProps, Form, Formik, FormikErrors, FormikProps} from "formik";
import {InitialQuoteFormValues} from '../../utils/interfaces';
import {createQuoteSchema} from '../../validation/CreateQuoteSchema';
import {Alert} from "@material-ui/lab";

interface QuickQuoteProps {
  initialValues: InitialQuoteFormValues;
  onSubmit: any;
  formSubmitted: boolean;
}

const QuickQuoteForm = ({initialValues, onSubmit, formSubmitted}: QuickQuoteProps) => {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isFormValid, setIsFormValid] = useState<boolean|undefined>();

  useEffect(() => {
    if (formSubmitted && isFormValid) {
      setShowSuccessAlert(true);
    }

    if (!formSubmitted && isFormValid === false) {
      setShowErrorAlert(true);
    }
  }, [isFormValid, formSubmitted]);

  const handleErrorAlertClose = () => {
    setShowErrorAlert(false);
  };

  const handleSuccessAlertClose = () => {
    setShowSuccessAlert(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createQuoteSchema}
      validateOnChange={false}
    >
      {({errors, isValid}: FormikProps<InitialQuoteFormValues>) => {
        setIsFormValid(isValid);

        return (
          <>
            <Snackbar
              color="error"
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}
              open={showErrorAlert}
              onClose={handleErrorAlertClose}
              autoHideDuration={5000}
            >
              <Alert severity="error">
                There are one or more errors in the form. Please fix them and try again.
              </Alert>
            </Snackbar>

            <Snackbar
              color="success"
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}
              open={showSuccessAlert}
              onClose={handleSuccessAlertClose}
              autoHideDuration={5000}
            >
              <Alert severity="success">
                Your quote was successfully created!
              </Alert>
            </Snackbar>

            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field name="depart_origin">
                    {({field}: FieldProps) => (
                      <>
                        <TextField
                          {...field}
                          error={!!errors.depart_origin}
                          label="From"
                          variant="outlined"
                        />
                        {errors.depart_origin && <FormHelperText error>{errors.depart_origin}</FormHelperText>}
                      </>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="depart_destination">
                    {({field}: FieldProps) => (
                      <TextField
                        {...field}
                        error={!!errors.depart_destination}
                        label="Destination"
                        variant="outlined"
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="origin_datetime">
                    {({field}: FieldProps) => (
                      <TextField
                        {...field}
                        error={!!errors.origin_datetime}
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
                  <Field name="destination_datetime">
                    {({field}: FieldProps) => (
                      <TextField
                        {...field}
                        error={!!errors.destination_datetime}
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
                  <Field name="number_people">
                    {({field}: FieldProps) => (
                      <FormControl error={!!errors.number_people}>
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
                      </FormControl>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl error={!!errors.transportation}>
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
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="name">
                    {({field}: FieldProps) => (
                      <TextField
                        {...field}
                        error={!!errors.name}
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
          </>
        );
      }}
    </Formik>
  );
};

export default QuickQuoteForm;
