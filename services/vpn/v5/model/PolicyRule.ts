

export class PolicyRule {
    private 'rule_index'?: number;
    public source?: string;
    public destination?: Array<string>;
    public constructor() { 
    }
    public withRuleIndex(ruleIndex: number): PolicyRule {
        this['rule_index'] = ruleIndex;
        return this;
    }
    public set ruleIndex(ruleIndex: number  | undefined) {
        this['rule_index'] = ruleIndex;
    }
    public get ruleIndex(): number | undefined {
        return this['rule_index'];
    }
    public withSource(source: string): PolicyRule {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: Array<string>): PolicyRule {
        this['destination'] = destination;
        return this;
    }
}