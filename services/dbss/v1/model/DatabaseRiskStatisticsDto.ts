import { RiskRuleStatistic } from './RiskRuleStatistic';


export class DatabaseRiskStatisticsDto {
    private 'db_id'?: string;
    private 'db_ip'?: string;
    private 'db_name'?: string;
    private 'high_risk'?: number;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'low_risk'?: number;
    private 'medium_risk'?: number;
    private 'risk_rule'?: Array<RiskRuleStatistic>;
    private 'total_risk'?: number;
    public constructor() { 
    }
    public withDbId(dbId: string): DatabaseRiskStatisticsDto {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbIp(dbIp: string): DatabaseRiskStatisticsDto {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbName(dbName: string): DatabaseRiskStatisticsDto {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withHighRisk(highRisk: number): DatabaseRiskStatisticsDto {
        this['high_risk'] = highRisk;
        return this;
    }
    public set highRisk(highRisk: number  | undefined) {
        this['high_risk'] = highRisk;
    }
    public get highRisk(): number | undefined {
        return this['high_risk'];
    }
    public withInstanceId(instanceId: string): DatabaseRiskStatisticsDto {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DatabaseRiskStatisticsDto {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withLowRisk(lowRisk: number): DatabaseRiskStatisticsDto {
        this['low_risk'] = lowRisk;
        return this;
    }
    public set lowRisk(lowRisk: number  | undefined) {
        this['low_risk'] = lowRisk;
    }
    public get lowRisk(): number | undefined {
        return this['low_risk'];
    }
    public withMediumRisk(mediumRisk: number): DatabaseRiskStatisticsDto {
        this['medium_risk'] = mediumRisk;
        return this;
    }
    public set mediumRisk(mediumRisk: number  | undefined) {
        this['medium_risk'] = mediumRisk;
    }
    public get mediumRisk(): number | undefined {
        return this['medium_risk'];
    }
    public withRiskRule(riskRule: Array<RiskRuleStatistic>): DatabaseRiskStatisticsDto {
        this['risk_rule'] = riskRule;
        return this;
    }
    public set riskRule(riskRule: Array<RiskRuleStatistic>  | undefined) {
        this['risk_rule'] = riskRule;
    }
    public get riskRule(): Array<RiskRuleStatistic> | undefined {
        return this['risk_rule'];
    }
    public withTotalRisk(totalRisk: number): DatabaseRiskStatisticsDto {
        this['total_risk'] = totalRisk;
        return this;
    }
    public set totalRisk(totalRisk: number  | undefined) {
        this['total_risk'] = totalRisk;
    }
    public get totalRisk(): number | undefined {
        return this['total_risk'];
    }
}