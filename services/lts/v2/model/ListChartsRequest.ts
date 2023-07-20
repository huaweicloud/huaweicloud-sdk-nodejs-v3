

export class ListChartsRequest {
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'Content-Type'?: string;
    public constructor(logGroupId?: string, logStreamId?: string, contentType?: string) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): ListChartsRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListChartsRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withOffset(offset: number): ListChartsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListChartsRequest {
        this['limit'] = limit;
        return this;
    }
    public withContentType(contentType: string): ListChartsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}