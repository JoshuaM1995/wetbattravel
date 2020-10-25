import { TransportationType } from './enums';

export interface InitialQuoteFormValues {
  origin: string;
  destination: string;
  depart_datetime: string;
  return_datetime: string;
  number_people: number;
  transportation: TransportationType|string;
  name: string;
}
