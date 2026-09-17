

export class DeletePushChannelRequest {
    private 'channel_id'?: string;
    public constructor(channelId?: string) { 
        this['channel_id'] = channelId;
    }
    public withChannelId(channelId: string): DeletePushChannelRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
}