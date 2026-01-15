import { DatabaseRiskStatisticsDto } from './DatabaseRiskStatisticsDto';
import { RuleRiskStatisticsDto } from './RuleRiskStatisticsDto';
import { UnsupportedAuditInfoResponse } from './UnsupportedAuditInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditStatisticsResponse extends SdkResponse {
    private 'db_risk_statistics'?: Array<DatabaseRiskStatisticsDto>;
    private 'high_risk_total'?: number;
    private 'low_risk_total'?: number;
    private 'medium_risk_total'?: number;
    private 'project_id'?: string;
    private 'rule_risk_statistics'?: Array<RuleRiskStatisticsDto>;
    private 'unsupported_audit_infos'?: UnsupportedAuditInfoResponse;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withDbRiskStatistics(dbRiskStatistics: Array<DatabaseRiskStatisticsDto>): ShowAuditStatisticsResponse {
        this['db_risk_statistics'] = dbRiskStatistics;
        return this;
    }
    public set dbRiskStatistics(dbRiskStatistics: Array<DatabaseRiskStatisticsDto>  | undefined) {
        this['db_risk_statistics'] = dbRiskStatistics;
    }
    public get dbRiskStatistics(): Array<DatabaseRiskStatisticsDto> | undefined {
        return this['db_risk_statistics'];
    }
    public withHighRiskTotal(highRiskTotal: number): ShowAuditStatisticsResponse {
        this['high_risk_total'] = highRiskTotal;
        return this;
    }
    public set highRiskTotal(highRiskTotal: number  | undefined) {
        this['high_risk_total'] = highRiskTotal;
    }
    public get highRiskTotal(): number | undefined {
        return this['high_risk_total'];
    }
    public withLowRiskTotal(lowRiskTotal: number): ShowAuditStatisticsResponse {
        this['low_risk_total'] = lowRiskTotal;
        return this;
    }
    public set lowRiskTotal(lowRiskTotal: number  | undefined) {
        this['low_risk_total'] = lowRiskTotal;
    }
    public get lowRiskTotal(): number | undefined {
        return this['low_risk_total'];
    }
    public withMediumRiskTotal(mediumRiskTotal: number): ShowAuditStatisticsResponse {
        this['medium_risk_total'] = mediumRiskTotal;
        return this;
    }
    public set mediumRiskTotal(mediumRiskTotal: number  | undefined) {
        this['medium_risk_total'] = mediumRiskTotal;
    }
    public get mediumRiskTotal(): number | undefined {
        return this['medium_risk_total'];
    }
    public withProjectId(projectId: string): ShowAuditStatisticsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRuleRiskStatistics(ruleRiskStatistics: Array<RuleRiskStatisticsDto>): ShowAuditStatisticsResponse {
        this['rule_risk_statistics'] = ruleRiskStatistics;
        return this;
    }
    public set ruleRiskStatistics(ruleRiskStatistics: Array<RuleRiskStatisticsDto>  | undefined) {
        this['rule_risk_statistics'] = ruleRiskStatistics;
    }
    public get ruleRiskStatistics(): Array<RuleRiskStatisticsDto> | undefined {
        return this['rule_risk_statistics'];
    }
    public withUnsupportedAuditInfos(unsupportedAuditInfos: UnsupportedAuditInfoResponse): ShowAuditStatisticsResponse {
        this['unsupported_audit_infos'] = unsupportedAuditInfos;
        return this;
    }
    public set unsupportedAuditInfos(unsupportedAuditInfos: UnsupportedAuditInfoResponse  | undefined) {
        this['unsupported_audit_infos'] = unsupportedAuditInfos;
    }
    public get unsupportedAuditInfos(): UnsupportedAuditInfoResponse | undefined {
        return this['unsupported_audit_infos'];
    }
    public withUpdateTime(updateTime: number): ShowAuditStatisticsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}