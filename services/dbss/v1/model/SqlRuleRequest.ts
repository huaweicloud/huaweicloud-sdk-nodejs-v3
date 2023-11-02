

export class SqlRuleRequest {
    private 'risk_levels'?: string;
    public constructor() { 
    }
    public withRiskLevels(riskLevels: string): SqlRuleRequest {
        this['risk_levels'] = riskLevels;
        return this;
    }
    public set riskLevels(riskLevels: string  | undefined) {
        this['risk_levels'] = riskLevels;
    }
    public get riskLevels(): string | undefined {
        return this['risk_levels'];
    }
}