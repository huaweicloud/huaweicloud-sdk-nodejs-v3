import { QueryLtsStructLogParams } from './QueryLtsStructLogParams';


export class ListQueryStructuredLogsRequest {
    private 'log_group_id': string | undefined;
    private 'log_stream_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: QueryLtsStructLogParams;
    public constructor(logGroupId?: any, logStreamId?: any, contentType?: any) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): ListQueryStructuredLogsRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListQueryStructuredLogsRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withContentType(contentType: string): ListQueryStructuredLogsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: QueryLtsStructLogParams): ListQueryStructuredLogsRequest {
        this['body'] = body;
        return this;
    }
}