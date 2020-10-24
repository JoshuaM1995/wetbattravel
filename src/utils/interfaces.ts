import { TransportationType } from './enums';

export interface InitialQuoteFormValues {
  depart_origin: string;
  depart_destination: string;
  origin_datetime: string;
  destination_datetime: string;
  number_people: number;
  transportation: TransportationType|string;
  name: string;
}
