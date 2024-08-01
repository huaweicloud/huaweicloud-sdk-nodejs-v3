

export class DeleteConsumerGroupRequest {
    private 'group_id'?: string;
    private 'stream_id'?: string;
    private 'consumer_group_name'?: string;
    private 'Content-Type'?: string;
    public constructor(groupId?: string, streamId?: string, consumerGroupName?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['stream_id'] = streamId;
        this['consumer_group_name'] = consumerGroupName;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): DeleteConsumerGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStreamId(streamId: string): DeleteConsumerGroupRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withConsumerGroupName(consumerGroupName: string): DeleteConsumerGroupRequest {
        this['consumer_group_name'] = consumerGroupName;
        return this;
    }
    public set consumerGroupName(consumerGroupName: string  | undefined) {
        this['consumer_group_name'] = consumerGroupName;
    }
    public get consumerGroupName(): string | undefined {
        return this['consumer_group_name'];
    }
    public withContentType(contentType: string): DeleteConsumerGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}