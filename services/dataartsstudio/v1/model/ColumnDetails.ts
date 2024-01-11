

export class ColumnDetails {
    public database?: string;
    public schema?: string;
    public table?: string;
    public column?: string;
    public constructor() { 
    }
    public withDatabase(database: string): ColumnDetails {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ColumnDetails {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ColumnDetails {
        this['table'] = table;
        return this;
    }
    public withColumn(column: string): ColumnDetails {
        this['column'] = column;
        return this;
    }
}