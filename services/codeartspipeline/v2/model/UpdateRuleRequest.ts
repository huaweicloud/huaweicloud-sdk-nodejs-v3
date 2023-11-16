import { UpdateRuleReq } from './UpdateRuleReq';


export class UpdateRuleRequest {
    private 'domain_id'?: string;
    private 'rule_id'?: string;
    public body?: UpdateRuleReq;
    public constructor(domainId?: string, ruleId?: string) { 
        this['domain_id'] = domainId;
        this['rule_id'] = ruleId;
    }
    public withDomainId(domainId: string): UpdateRuleRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRuleId(ruleId: string): UpdateRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateRuleReq): UpdateRuleRequest {
        this['body'] = body;
        return this;
    }
}