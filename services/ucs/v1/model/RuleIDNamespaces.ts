

export class RuleIDNamespaces {
    public ruleIDs?: Array<string>;
    public namespaces?: Array<string>;
    public constructor() { 
    }
    public withRuleIDs(ruleIDs: Array<string>): RuleIDNamespaces {
        this['ruleIDs'] = ruleIDs;
        return this;
    }
    public withNamespaces(namespaces: Array<string>): RuleIDNamespaces {
        this['namespaces'] = namespaces;
        return this;
    }
}