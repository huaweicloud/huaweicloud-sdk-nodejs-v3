

export class ConsumerGroupHeartBeatRequest {
    private 'group_id'?: string;
    private 'stream_id'?: string;
    private 'consumer_group_name'?: string;
    private 'consumer_name'?: string;
    private 'Content-Type'?: string;
    public body?: Array<string>;
    public constructor(groupId?: string, streamId?: string, consumerGroupName?: string, consumerName?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['stream_id'] = streamId;
        this['consumer_group_name'] = consumerGroupName;
        this['consumer_name'] = consumerName;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): ConsumerGroupHeartBeatRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStreamId(streamId: string): ConsumerGroupHeartBeatRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withConsumerGroupName(consumerGroupName: string): ConsumerGroupHeartBeatRequest {
        this['consumer_group_name'] = consumerGroupName;
        return this;
    }
    public set consumerGroupName(consumerGroupName: string  | undefined) {
        this['consumer_group_name'] = consumerGroupName;
    }
    public get consumerGroupName(): string | undefined {
        return this['consumer_group_name'];
    }
    public withConsumerName(consumerName: string): ConsumerGroupHeartBeatRequest {
        this['consumer_name'] = consumerName;
        return this;
    }
    public set consumerName(consumerName: string  | undefined) {
        this['consumer_name'] = consumerName;
    }
    public get consumerName(): string | undefined {
        return this['consumer_name'];
    }
    public withContentType(contentType: string): ConsumerGroupHeartBeatRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: Array<string>): ConsumerGroupHeartBeatRequest {
        this['body'] = body;
        return this;
    }
}