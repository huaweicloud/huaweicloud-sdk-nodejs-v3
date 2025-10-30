

export class LtsInfoJob {
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'lts_enabled'?: boolean;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): LtsInfoJob {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LtsInfoJob {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLtsEnabled(ltsEnabled: boolean): LtsInfoJob {
        this['lts_enabled'] = ltsEnabled;
        return this;
    }
    public set ltsEnabled(ltsEnabled: boolean  | undefined) {
        this['lts_enabled'] = ltsEnabled;
    }
    public get ltsEnabled(): boolean | undefined {
        return this['lts_enabled'];
    }
}