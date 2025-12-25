import { CreateChannelDto } from './CreateChannelDto';


export class UpdateCollectorChannelRequest {
    private 'workspace_id'?: string;
    private 'channel_id'?: string;
    public body?: CreateChannelDto;
    public constructor(workspaceId?: string, channelId?: string) { 
        this['workspace_id'] = workspaceId;
        this['channel_id'] = channelId;
    }
    public withWorkspaceId(workspaceId: string): UpdateCollectorChannelRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withChannelId(channelId: string): UpdateCollectorChannelRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withBody(body: CreateChannelDto): UpdateCollectorChannelRequest {
        this['body'] = body;
        return this;
    }
}