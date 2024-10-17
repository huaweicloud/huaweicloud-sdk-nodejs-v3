

export class RuleRiskResponseRules {
    public id?: string;
    public name?: string;
    public type?: string;
    public feature?: string;
    public status?: string;
    public rank?: number;
    private 'risk_level'?: string;
    private 'rule_type'?: string;
    public constructor(id?: string, name?: string, type?: string, status?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['status'] = status;
    }
    public withId(id: string): RuleRiskResponseRules {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RuleRiskResponseRules {
        this['name'] = name;
        return this;
    }
    public withType(type: string): RuleRiskResponseRules {
        this['type'] = type;
        return this;
    }
    public withFeature(feature: string): RuleRiskResponseRules {
        this['feature'] = feature;
        return this;
    }
    public withStatus(status: string): RuleRiskResponseRules {
        this['status'] = status;
        return this;
    }
    public withRank(rank: number): RuleRiskResponseRules {
        this['rank'] = rank;
        return this;
    }
    public withRiskLevel(riskLevel: string): RuleRiskResponseRules {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRuleType(ruleType: string): RuleRiskResponseRules {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
}