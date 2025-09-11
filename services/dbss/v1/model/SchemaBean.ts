

export class SchemaBean {
    public column?: string;
    public schema?: string;
    public table?: string;
    public constructor() { 
    }
    public withColumn(column: string): SchemaBean {
        this['column'] = column;
        return this;
    }
    public withSchema(schema: string): SchemaBean {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): SchemaBean {
        this['table'] = table;
        return this;
    }
}