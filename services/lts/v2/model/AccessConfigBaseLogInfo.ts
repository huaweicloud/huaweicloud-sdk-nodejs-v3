

export class AccessConfigBaseLogInfo {
    private 'log_group_id'?: string | undefined;
    private 'log_stream_id'?: string | undefined;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): AccessConfigBaseLogInfo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): AccessConfigBaseLogInfo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
}