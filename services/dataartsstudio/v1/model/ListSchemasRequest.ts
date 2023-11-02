

export class ListSchemasRequest {
    public workspace?: string;
    private 'connection_id'?: string;
    private 'database_name'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(workspace?: string, connectionId?: string, databaseName?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
        this['database_name'] = databaseName;
    }
    public withWorkspace(workspace: string): ListSchemasRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withConnectionId(connectionId: string): ListSchemasRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDatabaseName(databaseName: string): ListSchemasRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withLimit(limit: string): ListSchemasRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListSchemasRequest {
        this['offset'] = offset;
        return this;
    }
}