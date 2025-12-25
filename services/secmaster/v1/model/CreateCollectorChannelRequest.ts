import { CreateChannelDto } from './CreateChannelDto';


export class CreateCollectorChannelRequest {
    private 'workspace_id'?: string;
    public body?: CreateChannelDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateCollectorChannelRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateChannelDto): CreateCollectorChannelRequest {
        this['body'] = body;
        return this;
    }
}