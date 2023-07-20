

export class CreateTransferResponseBodyLogStreams {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    public constructor(logStreamId?: string, logStreamName?: string) { 
        this['log_stream_id'] = logStreamId;
        this['log_stream_name'] = logStreamName;
    }
    public withLogStreamId(logStreamId: string): CreateTransferResponseBodyLogStreams {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): CreateTransferResponseBodyLogStreams {
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