

export class CreateLogStreamParams {
    private 'log_stream_name': string | undefined;
    public constructor(logStreamName?: any) { 
        this['log_stream_name'] = logStreamName;
    }
    public withLogStreamName(logStreamName: string): CreateLogStreamParams {
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