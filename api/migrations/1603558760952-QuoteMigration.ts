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
          name: 'depart_origin',
          type: 'varchar',
        },
        {
          name: 'depart_destination',
          type: 'varchar',
        },
        {
          name: 'origin_datetime',
          type: 'timestamp',
        },
        {
          name: 'destination_datetime',
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
    await queryRunner.dropTable('quotes');
  }
}
