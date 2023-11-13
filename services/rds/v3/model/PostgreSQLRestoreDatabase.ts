import { PostgreSQLRestoreSchema } from './PostgreSQLRestoreSchema';


export class PostgreSQLRestoreDatabase {
    public database?: string;
    public schemas?: Array<PostgreSQLRestoreSchema>;
    public constructor() { 
    }
    public withDatabase(database: string): PostgreSQLRestoreDatabase {
        this['database'] = database;
        return this;
    }
    public withSchemas(schemas: Array<PostgreSQLRestoreSchema>): PostgreSQLRestoreDatabase {
        this['schemas'] = schemas;
        return this;
    }
}