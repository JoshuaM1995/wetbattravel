import { TransportationType } from './enums';

export interface InitialQuoteFormValues {
  from: string;
  destination: string;
  depart_date: string;
  return_date: string;
  people: number;
  transportation: TransportationType;
  name: string;
}
