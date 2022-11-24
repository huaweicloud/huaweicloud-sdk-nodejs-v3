import { RuleId } from './RuleId';


export class RuleIdList {
    public rules?: Array<RuleId>;
    public constructor() { 
    }
    public withRules(rules: Array<RuleId>): RuleIdList {
        this['rules'] = rules;
        return this;
    }
}