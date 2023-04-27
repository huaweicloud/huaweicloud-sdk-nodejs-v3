

export class ListLogStreamsRequest {
    private 'Content-Type': string | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_stream_name'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListLogStreamsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withLogGroupName(logGroupName: string): ListLogStreamsRequest {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): ListLogStreamsRequest {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
    public withOffset(offset: number): ListLogStreamsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLogStreamsRequest {
        this['limit'] = limit;
        return this;
    }
}