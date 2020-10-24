import { getRepository } from 'typeorm';
import { Request } from 'express';
import { Quote } from '../entities/Quote';
import database from "../database";

export class QuoteController {
  private quoteRepository;

  constructor() {
    database.then((connection) => {
      this.quoteRepository = connection.getRepository(Quote);
    });
  }

  async all(): Promise<Quote[]> {
    return await this.quoteRepository.find();
  }

  async one(request: Request) {
    return await this.quoteRepository.findOne(request.params.id);
  }

  async save(request: Request) {
    return await this.quoteRepository.save(request.body);
  }
}
