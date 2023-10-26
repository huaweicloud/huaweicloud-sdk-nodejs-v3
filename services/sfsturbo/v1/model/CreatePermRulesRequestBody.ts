import { OnePermRuleRequestInfo } from './OnePermRuleRequestInfo';


export class CreatePermRulesRequestBody {
    public rules?: Array<OnePermRuleRequestInfo>;
    public constructor(rules?: Array<OnePermRuleRequestInfo>) { 
        this['rules'] = rules;
    }
    public withRules(rules: Array<OnePermRuleRequestInfo>): CreatePermRulesRequestBody {
        this['rules'] = rules;
        return this;
    }
}