import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'quotes'})
export class Quote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    origin: string;

    @Column()
    destination: string;

    @Column()
    depart_datetime: Date;

    @Column()
    return_datetime: Date;

    @Column()
    number_people: number;

    @Column()
    transportation: string;

    @Column()
    price: number;
}
