import * as Yup from 'yup';
import moment from 'moment';
import {InitialQuoteFormValues} from "../utils/interfaces";

export const createQuoteSchema = Yup.object().shape<InitialQuoteFormValues>({
  destination: Yup.string().required('This field is required'),
  origin: Yup.string().required('This field is required'),
  depart_datetime: Yup.string()
    .test('origin_datetime_before_destination_datetime',
      'The departure date must be before the destination date',
      function (date) {
        return moment(date).isBefore(moment(this.parent.destination_datetime));
      },
    )
    .required('This field is required'),
  return_datetime: Yup.string()
    .test('destination_datetime_after_origin_datetime',
      'The destination date must be after the departure date',
      function (date) {
        return moment(date).isAfter(moment(this.parent.origin_datetime));
      },
    )
    .required('This field is required'),
  number_people: Yup.number().required('This field is required'),
  transportation: Yup.string().required('This field is required'),
  name: Yup.string().required('This field is required'),
});
