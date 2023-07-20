

export class CreateLogStreamParams {
    private 'log_stream_name'?: string;
    public constructor(logStreamName?: string) { 
        this['log_stream_name'] = logStreamName;
    }
    public withLogStreamName(logStreamName: string): CreateLogStreamParams {
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