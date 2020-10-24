import { Quote } from '../entities/Quote';

export interface QuotesResponse {
  quotes: Quote[];
}

export interface QuoteResponse {
  quote: Quote;
}
