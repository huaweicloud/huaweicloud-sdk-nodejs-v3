import { BatchUpdateIpReputationRuleRequestBody } from './BatchUpdateIpReputationRuleRequestBody';


export class BatchUpdateIpReputationRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateIpReputationRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateIpReputationRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateIpReputationRuleRequestBody): BatchUpdateIpReputationRulesRequest {
        this['body'] = body;
        return this;
    }
}