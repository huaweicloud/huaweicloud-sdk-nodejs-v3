import { FullUpdateRuleRequest } from './FullUpdateRuleRequest';


export class FullUpdateRulesRequest {
    public rules?: Array<FullUpdateRuleRequest>;
    public constructor(rules?: Array<FullUpdateRuleRequest>) { 
        this['rules'] = rules;
    }
    public withRules(rules: Array<FullUpdateRuleRequest>): FullUpdateRulesRequest {
        this['rules'] = rules;
        return this;
    }
}