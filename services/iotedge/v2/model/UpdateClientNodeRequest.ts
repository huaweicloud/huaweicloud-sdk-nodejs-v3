import { UpdateNodeChannelRequestDTO } from './UpdateNodeChannelRequestDTO';


export class UpdateClientNodeRequest {
    private 'channel_id'?: string;
    private 'node_id'?: string;
    public body?: UpdateNodeChannelRequestDTO;
    public constructor(channelId?: string, nodeId?: string) { 
        this['channel_id'] = channelId;
        this['node_id'] = nodeId;
    }
    public withChannelId(channelId: string): UpdateClientNodeRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withNodeId(nodeId: string): UpdateClientNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: UpdateNodeChannelRequestDTO): UpdateClientNodeRequest {
        this['body'] = body;
        return this;
    }
}