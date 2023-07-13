

export class UpdateLogtankRequestBody {
    private 'log_group_id': string | undefined;
    private 'log_stream_id': string | undefined;
    public constructor(logGroupId?: any, logStreamId?: any) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
    }
    public withLogGroupId(logGroupId: string): UpdateLogtankRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): UpdateLogtankRequestBody {
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