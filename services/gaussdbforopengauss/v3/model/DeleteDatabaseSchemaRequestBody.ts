

export class DeleteDatabaseSchemaRequestBody {
    private 'db_name'?: string;
    public schema?: string;
    public constructor(dbName?: string, schema?: string) { 
        this['db_name'] = dbName;
        this['schema'] = schema;
    }
    public withDbName(dbName: string): DeleteDatabaseSchemaRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchema(schema: string): DeleteDatabaseSchemaRequestBody {
        this['schema'] = schema;
        return this;
    }
}