

export class DeleteCollectorConnectionRequest {
    private 'workspace_id'?: string;
    private 'connection_id'?: string;
    public constructor(workspaceId?: string, connectionId?: string) { 
        this['workspace_id'] = workspaceId;
        this['connection_id'] = connectionId;
    }
    public withWorkspaceId(workspaceId: string): DeleteCollectorConnectionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withConnectionId(connectionId: string): DeleteCollectorConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}