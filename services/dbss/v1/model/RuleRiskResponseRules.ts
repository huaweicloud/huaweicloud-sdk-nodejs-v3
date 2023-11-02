

export class RuleRiskResponseRules {
    public id?: string;
    public name?: string;
    public type?: string;
    public feature?: string;
    public status?: string;
    public rank?: number;
    private 'risk_level'?: string;
    public constructor() { 
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
}