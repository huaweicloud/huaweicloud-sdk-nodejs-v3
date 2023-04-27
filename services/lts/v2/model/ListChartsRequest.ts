

export class ListChartsRequest {
    private 'log_group_id': string | undefined;
    private 'log_stream_id': string | undefined;
    public offset?: number;
    public limit?: number;
    private 'Content-Type': string | undefined;
    public constructor(logGroupId?: any, logStreamId?: any, contentType?: any) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): ListChartsRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListChartsRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
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
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}