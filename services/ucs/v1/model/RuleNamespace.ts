import { RuleInfo } from './RuleInfo';


export class RuleNamespace {
    public rules?: Array<RuleInfo>;
    public namespaces?: Array<string>;
    public constructor() { 
    }
    public withRules(rules: Array<RuleInfo>): RuleNamespace {
        this['rules'] = rules;
        return this;
    }
    public withNamespaces(namespaces: Array<string>): RuleNamespace {
        this['namespaces'] = namespaces;
        return this;
    }
}