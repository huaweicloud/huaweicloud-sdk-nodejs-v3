

export class ListColumnsRequest {
    public workspace?: string;
    private 'connection_id'?: string;
    private 'table_id'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(workspace?: string, connectionId?: string, tableId?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
        this['table_id'] = tableId;
    }
    public withWorkspace(workspace: string): ListColumnsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withConnectionId(connectionId: string): ListColumnsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withTableId(tableId: string): ListColumnsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withLimit(limit: string): ListColumnsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListColumnsRequest {
        this['offset'] = offset;
        return this;
    }
}