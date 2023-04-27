

export class ListLogStreamRequest {
    private 'log_group_id': string | undefined;
    public tag?: string;
    private 'Content-Type': string | undefined;
    public constructor(logGroupId?: any, contentType?: any) { 
        this['log_group_id'] = logGroupId;
        this['Content-Type'] = contentType;
    }
    public withLogGroupId(logGroupId: string): ListLogStreamRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withTag(tag: string): ListLogStreamRequest {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: string): ListLogStreamRequest {
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