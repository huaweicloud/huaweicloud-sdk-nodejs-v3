

export class SqlRuleRequest {
    public page?: number;
    public size?: number;
    private 'risk_levels'?: string;
    public constructor() { 
    }
    public withPage(page: number): SqlRuleRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): SqlRuleRequest {
        this['size'] = size;
        return this;
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