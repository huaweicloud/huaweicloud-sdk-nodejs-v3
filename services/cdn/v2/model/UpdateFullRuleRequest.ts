import { FullUpdateRulesRequest } from './FullUpdateRulesRequest';


export class UpdateFullRuleRequest {
    private 'domain_name'?: string;
    public body?: FullUpdateRulesRequest;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): UpdateFullRuleRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBody(body: FullUpdateRulesRequest): UpdateFullRuleRequest {
        this['body'] = body;
        return this;
    }
}