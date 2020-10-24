import { Request } from 'express';
import { Quote } from '../entities/Quote';
import database from '../database';
import * as faker from 'faker';
import { Repository } from 'typeorm';

export class QuoteController {
  private quoteRepository: Repository<Quote>;

  constructor() {
    database.then((connection) => {
      this.quoteRepository = connection.getRepository(Quote);
    });
  }

  async all(): Promise<Quote[]> {
    return await this.quoteRepository.find({
      order: { id: 'DESC' },
      take: 10,
    });
  }

  async one(request: Request) {
    return await this.quoteRepository.findOne(request.params.id);
  }

  async save(request: Request) {
    // "Calculate" the price and add it to the request body
    const quoteData = {
      ...request.body,
      price: faker.random.number({ min: 1, max: 1000 }),
    };

    return await this.quoteRepository.save(quoteData);
  }
}
