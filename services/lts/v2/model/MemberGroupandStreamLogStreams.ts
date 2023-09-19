

export class MemberGroupandStreamLogStreams {
    private 'log_stream_name'?: string;
    private 'log_stream_id'?: string;
    public constructor() { 
    }
    public withLogStreamName(logStreamName: string): MemberGroupandStreamLogStreams {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogStreamId(logStreamId: string): MemberGroupandStreamLogStreams {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
}