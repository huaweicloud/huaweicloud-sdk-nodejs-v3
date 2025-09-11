import { AuditInsanceRiskCount } from './AuditInsanceRiskCount';


export class RuleRiskStatisticsDto {
    public count?: number;
    private 'instance_risk_count'?: Array<AuditInsanceRiskCount>;
    private 'rule_name'?: string;
    public constructor() { 
    }
    public withCount(count: number): RuleRiskStatisticsDto {
        this['count'] = count;
        return this;
    }
    public withInstanceRiskCount(instanceRiskCount: Array<AuditInsanceRiskCount>): RuleRiskStatisticsDto {
        this['instance_risk_count'] = instanceRiskCount;
        return this;
    }
    public set instanceRiskCount(instanceRiskCount: Array<AuditInsanceRiskCount>  | undefined) {
        this['instance_risk_count'] = instanceRiskCount;
    }
    public get instanceRiskCount(): Array<AuditInsanceRiskCount> | undefined {
        return this['instance_risk_count'];
    }
    public withRuleName(ruleName: string): RuleRiskStatisticsDto {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
}