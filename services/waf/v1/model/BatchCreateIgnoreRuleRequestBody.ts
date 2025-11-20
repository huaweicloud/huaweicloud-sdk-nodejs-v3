import { CreateCondition } from './CreateCondition';
import { IgnoreAdvanced } from './IgnoreAdvanced';


export class BatchCreateIgnoreRuleRequestBody {
    public domain?: Array<string>;
    public conditions?: Array<CreateCondition>;
    public mode?: number;
    public rule?: string;
    public advanced?: IgnoreAdvanced;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(domain?: Array<string>, conditions?: Array<CreateCondition>, mode?: number, rule?: string, policyIds?: Array<string>) { 
        this['domain'] = domain;
        this['conditions'] = conditions;
        this['mode'] = mode;
        this['rule'] = rule;
        this['policy_ids'] = policyIds;
    }
    public withDomain(domain: Array<string>): BatchCreateIgnoreRuleRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withConditions(conditions: Array<CreateCondition>): BatchCreateIgnoreRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withMode(mode: number): BatchCreateIgnoreRuleRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withRule(rule: string): BatchCreateIgnoreRuleRequestBody {
        this['rule'] = rule;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): BatchCreateIgnoreRuleRequestBody {
        this['advanced'] = advanced;
        return this;
    }
    public withDescription(description: string): BatchCreateIgnoreRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreateIgnoreRuleRequestBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}