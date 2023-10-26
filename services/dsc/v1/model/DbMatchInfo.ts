

export class DbMatchInfo {
    private 'column_name'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    private 'rule_risk_level'?: number;
    private 'column_line'?: Array<number>;
    public constructor() { 
    }
    public withColumnName(columnName: string): DbMatchInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withRuleName(ruleName: string): DbMatchInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): DbMatchInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleRiskLevel(ruleRiskLevel: number): DbMatchInfo {
        this['rule_risk_level'] = ruleRiskLevel;
        return this;
    }
    public set ruleRiskLevel(ruleRiskLevel: number  | undefined) {
        this['rule_risk_level'] = ruleRiskLevel;
    }
    public get ruleRiskLevel(): number | undefined {
        return this['rule_risk_level'];
    }
    public withColumnLine(columnLine: Array<number>): DbMatchInfo {
        this['column_line'] = columnLine;
        return this;
    }
    public set columnLine(columnLine: Array<number>  | undefined) {
        this['column_line'] = columnLine;
    }
    public get columnLine(): Array<number> | undefined {
        return this['column_line'];
    }
}