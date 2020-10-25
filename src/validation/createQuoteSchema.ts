import * as Yup from 'yup';
import moment from 'moment';
import {InitialQuoteFormValues} from "../utils/interfaces";

export const createQuoteSchema = Yup.object().shape<InitialQuoteFormValues>({
  destination: Yup.string().required('This field is required'),
  origin: Yup.string().required('This field is required'),
  depart_datetime: Yup.string()
    .required('This field is required')
    .test('depart_datetime_before_return_datetime',
      'The departure date must be before the return date',
      function (date) {
        return moment(date).isBefore(moment(this.parent.destination_datetime));
      },
    ),
  return_datetime: Yup.string()
    .required('This field is required')
    .test('return_datetime_after_depart_datetime',
      'The return date must be after the departure date',
      function (date) {
        return moment(date).isAfter(moment(this.parent.origin_datetime));
      },
    ),
  number_people: Yup.number().required('This field is required'),
  transportation: Yup.string().required('This field is required'),
  name: Yup.string().required('This field is required'),
});
