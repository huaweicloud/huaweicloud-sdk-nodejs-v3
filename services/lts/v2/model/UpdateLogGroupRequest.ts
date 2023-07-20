import { UpdateLogGroupParams } from './UpdateLogGroupParams';


export class UpdateLogGroupRequest {
    private 'log_group_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateLogGroupParams;
    public constructor(logGroupId?: string, contentType?: string) { 
        this['log_group_id'] = logGroupId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): UpdateLogGroupRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withContentType(contentType: string): UpdateLogGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateLogGroupParams): UpdateLogGroupRequest {
        this['body'] = body;
        return this;
    }
}