

export class CreateTransferResponseBodyLogStreams {
    private 'log_stream_id': string | undefined;
    private 'log_stream_name': string | undefined;
    public constructor(logStreamId?: any, logStreamName?: any) { 
        this['log_stream_id'] = logStreamId;
        this['log_stream_name'] = logStreamName;
    }
    public withLogStreamId(logStreamId: string): CreateTransferResponseBodyLogStreams {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): CreateTransferResponseBodyLogStreams {
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