

export class LtsInfoOption {
    private 'log_group_name'?: string;
    private 'log_stream_name'?: string;
    public constructor(logGroupName?: string, logStreamName?: string) { 
        this['log_group_name'] = logGroupName;
        this['log_stream_name'] = logStreamName;
    }
    public withLogGroupName(logGroupName: string): LtsInfoOption {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): LtsInfoOption {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
}