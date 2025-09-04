

export class ExportTableVolumeRequestBody {
    private 'database_name'?: string;
    private 'schema_names'?: Array<string>;
    private 'table_name'?: string;
    private 'user_name'?: string;
    private 'sort_key'?: string;
    private 'sort_order'?: string;
    public constructor(databaseName?: string, schemaNames?: Array<string>) { 
        this['database_name'] = databaseName;
        this['schema_names'] = schemaNames;
    }
    public withDatabaseName(databaseName: string): ExportTableVolumeRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaNames(schemaNames: Array<string>): ExportTableVolumeRequestBody {
        this['schema_names'] = schemaNames;
        return this;
    }
    public set schemaNames(schemaNames: Array<string>  | undefined) {
        this['schema_names'] = schemaNames;
    }
    public get schemaNames(): Array<string> | undefined {
        return this['schema_names'];
    }
    public withTableName(tableName: string): ExportTableVolumeRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserName(userName: string): ExportTableVolumeRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSortKey(sortKey: string): ExportTableVolumeRequestBody {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortOrder(sortOrder: string): ExportTableVolumeRequestBody {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
}