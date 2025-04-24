

export class CheckPutEventsReqSources {
    private 'channel_id'?: string;
    private 'source_name'?: string;
    public constructor() { 
    }
    public withChannelId(channelId: string): CheckPutEventsReqSources {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withSourceName(sourceName: string): CheckPutEventsReqSources {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
}