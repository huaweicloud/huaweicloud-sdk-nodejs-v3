

export class ColumnConfig {
    public database?: string;
    public schema?: string;
    public table?: string;
    public column?: string;
    private 'is_exist'?: boolean;
    public constructor(database?: string, table?: string, column?: string) { 
        this['database'] = database;
        this['table'] = table;
        this['column'] = column;
    }
    public withDatabase(database: string): ColumnConfig {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ColumnConfig {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ColumnConfig {
        this['table'] = table;
        return this;
    }
    public withColumn(column: string): ColumnConfig {
        this['column'] = column;
        return this;
    }
    public withIsExist(isExist: boolean): ColumnConfig {
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