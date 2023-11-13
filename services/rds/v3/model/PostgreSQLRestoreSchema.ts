import { PostgreSQLRestoreTable } from './PostgreSQLRestoreTable';


export class PostgreSQLRestoreSchema {
    public schema?: string;
    public tables?: Array<PostgreSQLRestoreTable>;
    public constructor() { 
    }
    public withSchema(schema: string): PostgreSQLRestoreSchema {
        this['schema'] = schema;
        return this;
    }
    public withTables(tables: Array<PostgreSQLRestoreTable>): PostgreSQLRestoreSchema {
        this['tables'] = tables;
        return this;
    }
}