

export class TableConfig {
    public database?: string;
    public schema?: string;
    public table?: string;
    private 'is_exist'?: boolean;
    public constructor() { 
    }
    public withDatabase(database: string): TableConfig {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): TableConfig {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): TableConfig {
        this['table'] = table;
        return this;
    }
    public withIsExist(isExist: boolean): TableConfig {
        this['is_exist'] = isExist;
        return this;
    }
    public set isExist(isExist: boolean  | undefined) {
        this['is_exist'] = isExist;
    }
    public get isExist(): boolean | undefined {
        return this['is_exist'];
    }
}