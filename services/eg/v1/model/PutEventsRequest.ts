import { PutEventsReq } from './PutEventsReq';


export class PutEventsRequest {
    private 'channel_id'?: string;
    public body?: PutEventsReq;
    public constructor(channelId?: string) { 
        this['channel_id'] = channelId;
    }
    public withChannelId(channelId: string): PutEventsRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withBody(body: PutEventsReq): PutEventsRequest {
        this['body'] = body;
        return this;
    }
}