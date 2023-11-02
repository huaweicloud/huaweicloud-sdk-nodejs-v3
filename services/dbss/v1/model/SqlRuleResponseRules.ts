

export class SqlRuleResponseRules {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'risk_level'?: string;
    public type?: string;
    public rank?: number;
    public feature?: string;
    public regex?: string;
    public constructor() { 
    }
    public withId(id: string): SqlRuleResponseRules {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SqlRuleResponseRules {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): SqlRuleResponseRules {
        this['status'] = status;
        return this;
    }
    public withRiskLevel(riskLevel: string): SqlRuleResponseRules {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withType(type: string): SqlRuleResponseRules {
        this['type'] = type;
        return this;
    }
    public withRank(rank: number): SqlRuleResponseRules {
        this['rank'] = rank;
        return this;
    }
    public withFeature(feature: string): SqlRuleResponseRules {
        this['feature'] = feature;
        return this;
    }
    public withRegex(regex: string): SqlRuleResponseRules {
        this['regex'] = regex;
        return this;
    }
}