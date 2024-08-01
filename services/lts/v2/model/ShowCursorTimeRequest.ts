

export class ShowCursorTimeRequest {
    private 'group_id'?: string;
    private 'stream_id'?: string;
    private 'shard_id'?: string;
    public cursor?: string;
    public constructor(groupId?: string, streamId?: string, shardId?: string, cursor?: string) { 
        this['group_id'] = groupId;
        this['stream_id'] = streamId;
        this['shard_id'] = shardId;
        this['cursor'] = cursor;
    }
    public withGroupId(groupId: string): ShowCursorTimeRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStreamId(streamId: string): ShowCursorTimeRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withShardId(shardId: string): ShowCursorTimeRequest {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: string  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): string | undefined {
        return this['shard_id'];
    }
    public withCursor(cursor: string): ShowCursorTimeRequest {
        this['cursor'] = cursor;
        return this;
    }
}