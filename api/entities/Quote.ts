import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'quotes'})
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
    origin_datetime: Date;

    @Column()
    destination_datetime: Date;

    @Column()
    number_people: number;

    @Column()
    transportation: string;

    @Column()
    price: number;
}
