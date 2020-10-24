import * as Yup from 'yup';
import {InitialQuoteFormValues} from "../utils/interfaces";

export const createQuoteSchema = Yup.object().shape<InitialQuoteFormValues>({
  origin_datetime: Yup.string().required('This field is required'),
  depart_destination: Yup.string().required('This field is required'),
  depart_origin: Yup.string().required('This field is required'),
  number_people: Yup.number().required('This field is required'),
  destination_datetime: Yup.string().required('This field is required'),
  transportation: Yup.string().required('This field is required'),
  name: Yup.string().required('This field is required'),
});
