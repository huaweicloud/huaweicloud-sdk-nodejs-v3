

export class TableInfo {
    public database?: string;
    public schema?: string;
    public table?: string;
    public constructor() { 
    }
    public withDatabase(database: string): TableInfo {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): TableInfo {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): TableInfo {
        this['table'] = table;
        return this;
    }
}