

export class CreateTransferRequestBodyLogStreams {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    public constructor(logStreamId?: string) { 
        this['log_stream_id'] = logStreamId;
    }
    public withLogStreamId(logStreamId: string): CreateTransferRequestBodyLogStreams {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): CreateTransferRequestBodyLogStreams {
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