import { CreateClientNodeRequestDTO } from './CreateClientNodeRequestDTO';


export class CreateClientNodeRequest {
    private 'channel_id'?: string;
    public body?: CreateClientNodeRequestDTO;
    public constructor(channelId?: string) { 
        this['channel_id'] = channelId;
    }
    public withChannelId(channelId: string): CreateClientNodeRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withBody(body: CreateClientNodeRequestDTO): CreateClientNodeRequest {
        this['body'] = body;
        return this;
    }
}