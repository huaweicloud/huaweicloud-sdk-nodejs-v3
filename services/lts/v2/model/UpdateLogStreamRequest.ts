import { UpdateLogStreamParams } from './UpdateLogStreamParams';


export class UpdateLogStreamRequest {
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateLogStreamParams;
    public constructor(logGroupId?: string, logStreamId?: string, contentType?: string) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): UpdateLogStreamRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): UpdateLogStreamRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withContentType(contentType: string): UpdateLogStreamRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateLogStreamParams): UpdateLogStreamRequest {
        this['body'] = body;
        return this;
    }
}