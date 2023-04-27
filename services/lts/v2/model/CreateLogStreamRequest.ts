import { CreateLogStreamParams } from './CreateLogStreamParams';


export class CreateLogStreamRequest {
    private 'log_group_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: CreateLogStreamParams;
    public constructor(logGroupId?: any, contentType?: any) { 
        this['log_group_id'] = logGroupId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): CreateLogStreamRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withContentType(contentType: string): CreateLogStreamRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateLogStreamParams): CreateLogStreamRequest {
        this['body'] = body;
        return this;
    }
}