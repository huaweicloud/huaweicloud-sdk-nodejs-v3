import { PolicyRuleIdRequestBody } from './PolicyRuleIdRequestBody';


export class BatchDeleteCcRulesRequest {
    private 'Content-Type'?: string;
    public body?: PolicyRuleIdRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteCcRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: PolicyRuleIdRequestBody): BatchDeleteCcRulesRequest {
        this['body'] = body;
        return this;
    }
}