import { ConditionInfo } from './ConditionInfo';


export class ModifyRuleInfo {
    public rule?: ConditionInfo;
    public constructor() { 
    }
    public withRule(rule: ConditionInfo): ModifyRuleInfo {
        this['rule'] = rule;
        return this;
    }
}