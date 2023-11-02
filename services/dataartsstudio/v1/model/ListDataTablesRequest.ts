

export class ListDataTablesRequest {
    public workspace?: string;
    private 'connection_id'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(workspace?: string, connectionId?: string, databaseName?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
        this['database_name'] = databaseName;
    }
    public withWorkspace(workspace: string): ListDataTablesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withConnectionId(connectionId: string): ListDataTablesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDatabaseName(databaseName: string): ListDataTablesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListDataTablesRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withLimit(limit: string): ListDataTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDataTablesRequest {
        this['offset'] = offset;
        return this;
    }
}