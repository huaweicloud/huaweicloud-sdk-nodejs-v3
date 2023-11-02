

export class ListDatabasesRequest {
    public workspace?: string;
    private 'connection_id'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(workspace?: string, connectionId?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
    }
    public withWorkspace(workspace: string): ListDatabasesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withConnectionId(connectionId: string): ListDatabasesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withLimit(limit: string): ListDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDatabasesRequest {
        this['offset'] = offset;
        return this;
    }
}