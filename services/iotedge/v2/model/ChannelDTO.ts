

export class ChannelDTO {
    private 'channel_id'?: string;
    public name?: string;
    public channel?: string;
    public endpoint?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withChannelId(channelId: string): ChannelDTO {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withName(name: string): ChannelDTO {
        this['name'] = name;
        return this;
    }
    public withChannel(channel: string): ChannelDTO {
        this['channel'] = channel;
        return this;
    }
    public withEndpoint(endpoint: string): ChannelDTO {
        this['endpoint'] = endpoint;
        return this;
    }
    public withDescription(description: string): ChannelDTO {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ChannelDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ChannelDTO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}