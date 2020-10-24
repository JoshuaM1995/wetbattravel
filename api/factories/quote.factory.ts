import { define } from 'typeorm-seeding';
import { Quote } from '../entities/Quote';
import * as moment from 'moment'

define(Quote, (faker) => {
  const quote = new Quote();
  const originDateTimeFrom = moment().toDate();
  const originDateTimeFromTo = moment().add(1, 'month').toDate();
  const destinationDateTimeFrom = moment().toDate();
  const destinationDateTimeTo = moment().add(1, 'month').toDate();

  quote.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  quote.depart_origin = faker.address.city();
  quote.depart_destination = faker.address.city();
  quote.origin_datetime = faker.date.between(originDateTimeFrom, originDateTimeFromTo);
  quote.destination_datetime = faker.date.between(destinationDateTimeFrom, destinationDateTimeTo);
  quote.number_people = faker.random.number({ min: 1, max: 10 });
  quote.price = faker.random.number({ min: 200, max: 1000 });
  quote.transportation = faker.random.word();
  return quote
});
