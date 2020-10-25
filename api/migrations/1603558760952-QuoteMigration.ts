import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class QuoteMigration1603558760952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'quotes',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'origin',
          type: 'varchar',
        },
        {
          name: 'destination',
          type: 'varchar',
        },
        {
          name: 'depart_datetime',
          type: 'timestamp',
        },
        {
          name: 'return_datetime',
          type: 'timestamp',
        },
        {
          name: 'number_people',
          type: 'int',
        },
        {
          name: 'transportation',
          type: 'varchar',
        },
        {
          name: 'price',
          type: 'numeric',
        },
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quotes', true);
  }
}
