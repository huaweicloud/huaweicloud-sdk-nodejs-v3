

export class AuthorizeDataConnectionRequest {
    private 'data_connection_id'?: string;
    private 'workspace_id'?: string;
    public constructor(dataConnectionId?: string) { 
        this['data_connection_id'] = dataConnectionId;
    }
    public withDataConnectionId(dataConnectionId: string): AuthorizeDataConnectionRequest {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withWorkspaceId(workspaceId: string): AuthorizeDataConnectionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}