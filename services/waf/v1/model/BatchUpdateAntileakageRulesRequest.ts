import { BatchUpdateAntileakageRuleRequestBody } from './BatchUpdateAntileakageRuleRequestBody';


export class BatchUpdateAntileakageRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateAntileakageRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateAntileakageRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateAntileakageRuleRequestBody): BatchUpdateAntileakageRulesRequest {
        this['body'] = body;
        return this;
    }
}