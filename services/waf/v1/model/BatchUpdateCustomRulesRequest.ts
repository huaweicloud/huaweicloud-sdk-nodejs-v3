import { BatchUpdateCustomRuleRequestBody } from './BatchUpdateCustomRuleRequestBody';


export class BatchUpdateCustomRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateCustomRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateCustomRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateCustomRuleRequestBody): BatchUpdateCustomRulesRequest {
        this['body'] = body;
        return this;
    }
}