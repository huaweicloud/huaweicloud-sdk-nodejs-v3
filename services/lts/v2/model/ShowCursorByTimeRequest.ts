

export class ShowCursorByTimeRequest {
    private 'group_id'?: string;
    private 'stream_id'?: string;
    private 'shard_id'?: string;
    public from?: string;
    private 'Content-Type'?: string;
    public constructor(groupId?: string, streamId?: string, shardId?: string, from?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['stream_id'] = streamId;
        this['shard_id'] = shardId;
        this['from'] = from;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): ShowCursorByTimeRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStreamId(streamId: string): ShowCursorByTimeRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withShardId(shardId: string): ShowCursorByTimeRequest {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: string  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): string | undefined {
        return this['shard_id'];
    }
    public withFrom(from: string): ShowCursorByTimeRequest {
        this['from'] = from;
        return this;
    }
    public withContentType(contentType: string): ShowCursorByTimeRequest {
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