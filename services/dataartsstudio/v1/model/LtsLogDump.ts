

export class LtsLogDump {
    private 'log_dump'?: boolean;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    public constructor() { 
    }
    public withLogDump(logDump: boolean): LtsLogDump {
        this['log_dump'] = logDump;
        return this;
    }
    public set logDump(logDump: boolean  | undefined) {
        this['log_dump'] = logDump;
    }
    public get logDump(): boolean | undefined {
        return this['log_dump'];
    }
    public withLogGroupId(logGroupId: string): LtsLogDump {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): LtsLogDump {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): LtsLogDump {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): LtsLogDump {
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