import { AccessConfigBaseLogInfo } from './AccessConfigBaseLogInfo';


export class AccessConfigQueryLogInfo {
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_name'?: string;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): AccessConfigQueryLogInfo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): AccessConfigQueryLogInfo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogGroupName(logGroupName: string): AccessConfigQueryLogInfo {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): AccessConfigQueryLogInfo {
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