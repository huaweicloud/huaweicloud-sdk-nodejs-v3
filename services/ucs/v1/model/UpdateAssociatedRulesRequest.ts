import { RuleIDNamespaces } from './RuleIDNamespaces';


export class UpdateAssociatedRulesRequest {
    public ruleIDNamespaces?: Array<RuleIDNamespaces>;
    public constructor() { 
    }
    public withRuleIDNamespaces(ruleIDNamespaces: Array<RuleIDNamespaces>): UpdateAssociatedRulesRequest {
        this['ruleIDNamespaces'] = ruleIDNamespaces;
        return this;
    }
}