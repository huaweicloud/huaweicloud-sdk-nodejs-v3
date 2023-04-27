import { UpdateLogGroupParams } from './UpdateLogGroupParams';


export class UpdateLogGroupRequest {
    private 'log_group_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: UpdateLogGroupParams;
    public constructor(logGroupId?: any, contentType?: any) { 
        this['log_group_id'] = logGroupId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): UpdateLogGroupRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withContentType(contentType: string): UpdateLogGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateLogGroupParams): UpdateLogGroupRequest {
        this['body'] = body;
        return this;
    }
}