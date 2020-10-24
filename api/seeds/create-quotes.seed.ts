import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Quote } from '../entities/Quote';

export default class CreateQuotes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Quote)().createMany(10);
  }
}
