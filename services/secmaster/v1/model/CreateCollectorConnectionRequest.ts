import { CreateConnectionDto } from './CreateConnectionDto';


export class CreateCollectorConnectionRequest {
    private 'workspace_id'?: string;
    public body?: CreateConnectionDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateCollectorConnectionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateConnectionDto): CreateCollectorConnectionRequest {
        this['body'] = body;
        return this;
    }
}