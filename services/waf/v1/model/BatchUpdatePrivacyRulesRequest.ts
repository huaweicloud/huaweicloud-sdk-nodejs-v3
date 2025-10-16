import { BatchUpdatePrivacyRuleRequestBody } from './BatchUpdatePrivacyRuleRequestBody';


export class BatchUpdatePrivacyRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdatePrivacyRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdatePrivacyRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdatePrivacyRuleRequestBody): BatchUpdatePrivacyRulesRequest {
        this['body'] = body;
        return this;
    }
}