

export class ShowStructTemplateRequest {
    public logGroupId?: string;
    public logStreamId?: string;
    public constructor(logGroupId?: string, logStreamId?: string) { 
        this['logGroupId'] = logGroupId;
        this['logStreamId'] = logStreamId;
    }
    public withLogGroupId(logGroupId: string): ShowStructTemplateRequest {
        this['logGroupId'] = logGroupId;
        return this;
    }
    public withLogStreamId(logStreamId: string): ShowStructTemplateRequest {
        this['logStreamId'] = logStreamId;
        return this;
    }
}