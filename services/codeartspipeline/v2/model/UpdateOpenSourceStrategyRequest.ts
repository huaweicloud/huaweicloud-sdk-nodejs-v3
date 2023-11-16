import { OpenSourceRuleSetCreateVO } from './OpenSourceRuleSetCreateVO';


export class UpdateOpenSourceStrategyRequest {
    private 'domain_id'?: string;
    private 'rule_set_id'?: string;
    public body?: OpenSourceRuleSetCreateVO;
    public constructor(domainId?: string, ruleSetId?: string) { 
        this['domain_id'] = domainId;
        this['rule_set_id'] = ruleSetId;
    }
    public withDomainId(domainId: string): UpdateOpenSourceStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRuleSetId(ruleSetId: string): UpdateOpenSourceStrategyRequest {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
    public withBody(body: OpenSourceRuleSetCreateVO): UpdateOpenSourceStrategyRequest {
        this['body'] = body;
        return this;
    }
}