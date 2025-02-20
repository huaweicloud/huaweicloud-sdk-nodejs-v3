

export class ActionParamsRepairInfoObjects {
    public database?: string;
    public schema?: string;
    public table?: string;
    public constructor() { 
    }
    public withDatabase(database: string): ActionParamsRepairInfoObjects {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ActionParamsRepairInfoObjects {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ActionParamsRepairInfoObjects {
        this['table'] = table;
        return this;
    }
}