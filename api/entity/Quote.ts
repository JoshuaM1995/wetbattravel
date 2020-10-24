import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    depart_origin: string;

    @Column()
    depart_destination: string;

    @Column()
    origin_datetime: string;

    @Column()
    destination_datetime: string;

    @Column()
    number_people: number;

    @Column()
    transportation: string;

    @Column()
    price: number;
}
