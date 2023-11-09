import { ConditionInfo } from './ConditionInfo';


export class CreateRuleInfo {
    public rule?: ConditionInfo;
    public constructor(rule?: ConditionInfo) { 
        this['rule'] = rule;
    }
    public withRule(rule: ConditionInfo): CreateRuleInfo {
        this['rule'] = rule;
        return this;
    }
}