import { UpdateRuleSetStatusReq } from './UpdateRuleSetStatusReq';


export class SwitchOpenSourceStrategyRequest {
    private 'domain_id'?: string;
    private 'rule_set_id'?: string;
    public body?: UpdateRuleSetStatusReq;
    public constructor(domainId?: string, ruleSetId?: string) { 
        this['domain_id'] = domainId;
        this['rule_set_id'] = ruleSetId;
    }
    public withDomainId(domainId: string): SwitchOpenSourceStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRuleSetId(ruleSetId: string): SwitchOpenSourceStrategyRequest {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
    public withBody(body: UpdateRuleSetStatusReq): SwitchOpenSourceStrategyRequest {
        this['body'] = body;
        return this;
    }
}