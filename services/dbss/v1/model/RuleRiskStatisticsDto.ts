import { AuditInstanceRiskCount } from './AuditInstanceRiskCount';


export class RuleRiskStatisticsDto {
    public count?: number;
    private 'instance_risk_count'?: Array<AuditInstanceRiskCount>;
    private 'rule_name'?: string;
    public constructor() { 
    }
    public withCount(count: number): RuleRiskStatisticsDto {
        this['count'] = count;
        return this;
    }
    public withInstanceRiskCount(instanceRiskCount: Array<AuditInstanceRiskCount>): RuleRiskStatisticsDto {
        this['instance_risk_count'] = instanceRiskCount;
        return this;
    }
    public set instanceRiskCount(instanceRiskCount: Array<AuditInstanceRiskCount>  | undefined) {
        this['instance_risk_count'] = instanceRiskCount;
    }
    public get instanceRiskCount(): Array<AuditInstanceRiskCount> | undefined {
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