import { BatchUpdateWhiteBlackIpRuleRequestBody } from './BatchUpdateWhiteBlackIpRuleRequestBody';


export class BatchUpdateWhiteblackipRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateWhiteBlackIpRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateWhiteblackipRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateWhiteBlackIpRuleRequestBody): BatchUpdateWhiteblackipRulesRequest {
        this['body'] = body;
        return this;
    }
}