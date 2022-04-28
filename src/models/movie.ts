import Client from '../database'

export type Movie {
    id: Number;
    title: string;
    type: string;
    genre: string;
    year: number;
};

export class MovieStore {
        async index(): Promise<Movie[]> { // everything after a : in TS will be returned. this returns a promise of a Movie array
        try {
            const conn = await Client.connect() // this opens up a connection to the db
            const sql = 'SELECT * FROM movie' 
            const result = await conn.query(sql) // the resulting rows will be saved as the result
            const.release() // closes the db connection
            return result.rows
         } catch (err) {
             throw new Error(`Cannot get Movies ${err}`)
         }        
    }
}