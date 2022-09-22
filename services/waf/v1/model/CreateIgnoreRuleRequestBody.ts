import { Advanced } from './Advanced';
import { CreateCondition } from './CreateCondition';


export class CreateIgnoreRuleRequestBody {
    public domain: Array<string>;
    public conditions: Array<CreateCondition>;
    public mode: number;
    public rule: string;
    public advanced?: Array<Advanced>;
    public description?: string;
    public constructor(domain?: any, conditions?: any, mode?: any, rule?: any) { 
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
    public withAdvanced(advanced: Array<Advanced>): CreateIgnoreRuleRequestBody {
        this['advanced'] = advanced;
        return this;
    }
    public withDescription(description: string): CreateIgnoreRuleRequestBody {
        this['description'] = description;
        return this;
    }
}