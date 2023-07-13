import { AccessConfigBaseLogInfo } from './AccessConfigBaseLogInfo';


export class AccessConfigQueryLogInfo {
    private 'log_group_id'?: string | undefined;
    private 'log_stream_id'?: string | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_stream_name'?: string | undefined;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): AccessConfigQueryLogInfo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): AccessConfigQueryLogInfo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogGroupName(logGroupName: string): AccessConfigQueryLogInfo {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): AccessConfigQueryLogInfo {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
}