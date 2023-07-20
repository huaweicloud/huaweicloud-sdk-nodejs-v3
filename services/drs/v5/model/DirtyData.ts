

export class DirtyData {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'error_sql'?: string;
    private 'error_time'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withDbName(dbName: string): DirtyData {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): DirtyData {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): DirtyData {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withErrorSql(errorSql: string): DirtyData {
        this['error_sql'] = errorSql;
        return this;
    }
    public set errorSql(errorSql: string  | undefined) {
        this['error_sql'] = errorSql;
    }
    public get errorSql(): string | undefined {
        return this['error_sql'];
    }
    public withErrorTime(errorTime: string): DirtyData {
        this['error_time'] = errorTime;
        return this;
    }
    public set errorTime(errorTime: string  | undefined) {
        this['error_time'] = errorTime;
    }
    public get errorTime(): string | undefined {
        return this['error_time'];
    }
    public withErrorMsg(errorMsg: string): DirtyData {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}