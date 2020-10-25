import { define } from 'typeorm-seeding';
import { Quote } from '../entities/Quote';
import * as moment from 'moment'

define(Quote, (faker) => {
  const quote = new Quote();
  const departDateTimeFrom = moment().toDate();
  const departDateTimeTo = moment().add(1, 'month').toDate();
  const returnDateTimeFrom = moment().toDate();
  const returnDateTimeTo = moment().add(1, 'month').toDate();

  quote.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  quote.origin = faker.address.city();
  quote.destination = faker.address.city();
  quote.depart_datetime = faker.date.between(departDateTimeFrom, departDateTimeTo);
  quote.return_datetime = faker.date.between(returnDateTimeFrom, returnDateTimeTo);
  quote.number_people = faker.random.number({ min: 1, max: 10 });
  quote.price = faker.random.number({ min: 200, max: 1000 });
  quote.transportation = faker.random.word();
  return quote
});
