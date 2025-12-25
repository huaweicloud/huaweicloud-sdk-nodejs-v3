import { UpdateConnectionDto } from './UpdateConnectionDto';


export class UpdateCollectorConnectionRequest {
    private 'workspace_id'?: string;
    private 'connection_id'?: string;
    public body?: UpdateConnectionDto;
    public constructor(workspaceId?: string, connectionId?: string) { 
        this['workspace_id'] = workspaceId;
        this['connection_id'] = connectionId;
    }
    public withWorkspaceId(workspaceId: string): UpdateCollectorConnectionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withConnectionId(connectionId: string): UpdateCollectorConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateConnectionDto): UpdateCollectorConnectionRequest {
        this['body'] = body;
        return this;
    }
}