

export class ListHistorySqlRequest {
    private 'Content-Type'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public constructor(logGroupId?: string, logStreamId?: string) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
    }
    public withContentType(contentType: string): ListHistorySqlRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLogGroupId(logGroupId: string): ListHistorySqlRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListHistorySqlRequest {
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