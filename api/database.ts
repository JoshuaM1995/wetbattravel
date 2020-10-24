import {createConnection} from 'typeorm';

const connection = async () => await createConnection();
const database = connection();

export default database;
