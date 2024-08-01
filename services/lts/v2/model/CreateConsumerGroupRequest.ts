import { ConsumerGroupInfo } from './ConsumerGroupInfo';


export class CreateConsumerGroupRequest {
    private 'group_id'?: string;
    private 'stream_id'?: string;
    private 'Content-Type'?: string;
    public body?: ConsumerGroupInfo;
    public constructor(groupId?: string, streamId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['stream_id'] = streamId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): CreateConsumerGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStreamId(streamId: string): CreateConsumerGroupRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withContentType(contentType: string): CreateConsumerGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ConsumerGroupInfo): CreateConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}