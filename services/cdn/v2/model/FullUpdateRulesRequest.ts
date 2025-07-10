import { CreateRuleRequest } from './CreateRuleRequest';


export class FullUpdateRulesRequest {
    public rules?: Array<CreateRuleRequest>;
    public constructor(rules?: Array<CreateRuleRequest>) { 
        this['rules'] = rules;
    }
    public withRules(rules: Array<CreateRuleRequest>): FullUpdateRulesRequest {
        this['rules'] = rules;
        return this;
    }
}