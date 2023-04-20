

export class FuncLogConfig {
    private 'group_name'?: string | undefined;
    private 'group_id'?: string | undefined;
    private 'stream_name'?: string | undefined;
    private 'stream_id'?: string | undefined;
    public constructor() { 
    }
    public withGroupName(groupName: string): FuncLogConfig {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withGroupId(groupId: string): FuncLogConfig {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withStreamName(streamName: string): FuncLogConfig {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
    public withStreamId(streamId: string): FuncLogConfig {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId() {
        return this['stream_id'];
    }
}