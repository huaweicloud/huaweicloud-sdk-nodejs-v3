

export class DatabaseTablesInfo {
    public database?: string;
    public tables?: Array<string>;
    public constructor() { 
    }
    public withDatabase(database: string): DatabaseTablesInfo {
        this['database'] = database;
        return this;
    }
    public withTables(tables: Array<string>): DatabaseTablesInfo {
        this['tables'] = tables;
        return this;
    }
}