

export class ShowDataProfileRequest {
    public workspace?: string;
    private 'dw_id'?: string;
    private 'db_type'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    public constructor(workspace?: string, dwId?: string, dbType?: string, databaseName?: string, tableName?: string) { 
        this['workspace'] = workspace;
        this['dw_id'] = dwId;
        this['db_type'] = dbType;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withWorkspace(workspace: string): ShowDataProfileRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDwId(dwId: string): ShowDataProfileRequest {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDbType(dbType: string): ShowDataProfileRequest {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withDatabaseName(databaseName: string): ShowDataProfileRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ShowDataProfileRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}