

export class RuleAddSqlRequest {
    private 'risk_level'?: string;
    private 'rule_name'?: string;
    private 'sql_regex'?: string;
    public status?: string;
    public constructor(riskLevel?: string, ruleName?: string, sqlRegex?: string, status?: string) { 
        this['risk_level'] = riskLevel;
        this['rule_name'] = ruleName;
        this['sql_regex'] = sqlRegex;
        this['status'] = status;
    }
    public withRiskLevel(riskLevel: string): RuleAddSqlRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRuleName(ruleName: string): RuleAddSqlRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSqlRegex(sqlRegex: string): RuleAddSqlRequest {
        this['sql_regex'] = sqlRegex;
        return this;
    }
    public set sqlRegex(sqlRegex: string  | undefined) {
        this['sql_regex'] = sqlRegex;
    }
    public get sqlRegex(): string | undefined {
        return this['sql_regex'];
    }
    public withStatus(status: string): RuleAddSqlRequest {
        this['status'] = status;
        return this;
    }
}