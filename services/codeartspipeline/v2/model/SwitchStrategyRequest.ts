import { UpdateRuleSetStatusReq } from './UpdateRuleSetStatusReq';


export class SwitchStrategyRequest {
    private 'rule_set_id'?: string;
    private 'domain_id'?: string;
    public body?: UpdateRuleSetStatusReq;
    public constructor(ruleSetId?: string, domainId?: string) { 
        this['rule_set_id'] = ruleSetId;
        this['domain_id'] = domainId;
    }
    public withRuleSetId(ruleSetId: string): SwitchStrategyRequest {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
    public withDomainId(domainId: string): SwitchStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: UpdateRuleSetStatusReq): SwitchStrategyRequest {
        this['body'] = body;
        return this;
    }
}