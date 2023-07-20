import { QueryLtsStructLogParamsNew } from './QueryLtsStructLogParamsNew';


export class ListStructuredLogsWithTimeRangeRequest {
    private 'log_stream_id'?: string;
    private 'Content-Type'?: string;
    public body?: QueryLtsStructLogParamsNew;
    public constructor(logStreamId?: string, contentType?: string) { 
        this['log_stream_id'] = logStreamId;
        this['Content-Type'] = contentType;
    }
    public withLogStreamId(logStreamId: string): ListStructuredLogsWithTimeRangeRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withContentType(contentType: string): ListStructuredLogsWithTimeRangeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: QueryLtsStructLogParamsNew): ListStructuredLogsWithTimeRangeRequest {
        this['body'] = body;
        return this;
    }
}