

export class TableInfoV2 {
    public catalog?: string;
    public database?: string;
    public schema?: string;
    public table?: string;
    public constructor() { 
    }
    public withCatalog(catalog: string): TableInfoV2 {
        this['catalog'] = catalog;
        return this;
    }
    public withDatabase(database: string): TableInfoV2 {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): TableInfoV2 {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): TableInfoV2 {
        this['table'] = table;
        return this;
    }
}