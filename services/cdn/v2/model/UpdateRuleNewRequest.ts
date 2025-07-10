import { UpdateRuleRequest } from './UpdateRuleRequest';


export class UpdateRuleNewRequest {
    private 'domain_name'?: string;
    private 'rule_id'?: string;
    public body?: UpdateRuleRequest;
    public constructor(domainName?: string, ruleId?: string) { 
        this['domain_name'] = domainName;
        this['rule_id'] = ruleId;
    }
    public withDomainName(domainName: string): UpdateRuleNewRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withRuleId(ruleId: string): UpdateRuleNewRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateRuleRequest): UpdateRuleNewRequest {
        this['body'] = body;
        return this;
    }
}