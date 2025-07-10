import { BatchUpdateRulesRequest } from './BatchUpdateRulesRequest';


export class BatchUpdateRuleStatusRequest {
    private 'domain_name'?: string;
    public body?: BatchUpdateRulesRequest;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): BatchUpdateRuleStatusRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBody(body: BatchUpdateRulesRequest): BatchUpdateRuleStatusRequest {
        this['body'] = body;
        return this;
    }
}