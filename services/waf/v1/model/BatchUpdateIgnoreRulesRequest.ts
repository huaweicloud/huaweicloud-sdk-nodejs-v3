import { BatchUpdateIgnoreRuleRequestBody } from './BatchUpdateIgnoreRuleRequestBody';


export class BatchUpdateIgnoreRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateIgnoreRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateIgnoreRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateIgnoreRuleRequestBody): BatchUpdateIgnoreRulesRequest {
        this['body'] = body;
        return this;
    }
}