import { CreateCondition } from './CreateCondition';
import { IgnoreAdvanced } from './IgnoreAdvanced';


export class CreateIgnoreRuleRequestBody {
    public domain?: Array<string>;
    public conditions?: Array<CreateCondition>;
    public mode?: number;
    public rule?: string;
    public advanced?: IgnoreAdvanced;
    public description?: string;
    public constructor(domain?: Array<string>, conditions?: Array<CreateCondition>, mode?: number, rule?: string) { 
        this['domain'] = domain;
        this['conditions'] = conditions;
        this['mode'] = mode;
        this['rule'] = rule;
    }
    public withDomain(domain: Array<string>): CreateIgnoreRuleRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withConditions(conditions: Array<CreateCondition>): CreateIgnoreRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withMode(mode: number): CreateIgnoreRuleRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withRule(rule: string): CreateIgnoreRuleRequestBody {
        this['rule'] = rule;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): CreateIgnoreRuleRequestBody {
        this['advanced'] = advanced;
        return this;
    }
    public withDescription(description: string): CreateIgnoreRuleRequestBody {
        this['description'] = description;
        return this;
    }
}