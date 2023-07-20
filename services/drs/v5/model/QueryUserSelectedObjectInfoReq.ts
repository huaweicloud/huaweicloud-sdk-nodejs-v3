

export class QueryUserSelectedObjectInfoReq {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'has_column_info'?: boolean;
    public constructor() { 
    }
    public withDbName(dbName: string): QueryUserSelectedObjectInfoReq {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): QueryUserSelectedObjectInfoReq {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): QueryUserSelectedObjectInfoReq {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withOffset(offset: number): QueryUserSelectedObjectInfoReq {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): QueryUserSelectedObjectInfoReq {
        this['limit'] = limit;
        return this;
    }
    public withHasColumnInfo(hasColumnInfo: boolean): QueryUserSelectedObjectInfoReq {
        this['has_column_info'] = hasColumnInfo;
        return this;
    }
    public set hasColumnInfo(hasColumnInfo: boolean  | undefined) {
        this['has_column_info'] = hasColumnInfo;
    }
    public get hasColumnInfo(): boolean | undefined {
        return this['has_column_info'];
    }
}