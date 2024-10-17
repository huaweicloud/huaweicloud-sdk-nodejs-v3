import { AuditSummaryResponseDataList } from './AuditSummaryResponseDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditSummaryInfosResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'audit_duration'?: number;
    private 'total_sql'?: number;
    private 'total_risk'?: number;
    private 'today_sql'?: number;
    private 'today_risk'?: number;
    private 'today_session'?: number;
    private 'update_time'?: number;
    private 'data_list'?: Array<AuditSummaryResponseDataList>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ListAuditSummaryInfosResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAuditDuration(auditDuration: number): ListAuditSummaryInfosResponse {
        this['audit_duration'] = auditDuration;
        return this;
    }
    public set auditDuration(auditDuration: number  | undefined) {
        this['audit_duration'] = auditDuration;
    }
    public get auditDuration(): number | undefined {
        return this['audit_duration'];
    }
    public withTotalSql(totalSql: number): ListAuditSummaryInfosResponse {
        this['total_sql'] = totalSql;
        return this;
    }
    public set totalSql(totalSql: number  | undefined) {
        this['total_sql'] = totalSql;
    }
    public get totalSql(): number | undefined {
        return this['total_sql'];
    }
    public withTotalRisk(totalRisk: number): ListAuditSummaryInfosResponse {
        this['total_risk'] = totalRisk;
        return this;
    }
    public set totalRisk(totalRisk: number  | undefined) {
        this['total_risk'] = totalRisk;
    }
    public get totalRisk(): number | undefined {
        return this['total_risk'];
    }
    public withTodaySql(todaySql: number): ListAuditSummaryInfosResponse {
        this['today_sql'] = todaySql;
        return this;
    }
    public set todaySql(todaySql: number  | undefined) {
        this['today_sql'] = todaySql;
    }
    public get todaySql(): number | undefined {
        return this['today_sql'];
    }
    public withTodayRisk(todayRisk: number): ListAuditSummaryInfosResponse {
        this['today_risk'] = todayRisk;
        return this;
    }
    public set todayRisk(todayRisk: number  | undefined) {
        this['today_risk'] = todayRisk;
    }
    public get todayRisk(): number | undefined {
        return this['today_risk'];
    }
    public withTodaySession(todaySession: number): ListAuditSummaryInfosResponse {
        this['today_session'] = todaySession;
        return this;
    }
    public set todaySession(todaySession: number  | undefined) {
        this['today_session'] = todaySession;
    }
    public get todaySession(): number | undefined {
        return this['today_session'];
    }
    public withUpdateTime(updateTime: number): ListAuditSummaryInfosResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDataList(dataList: Array<AuditSummaryResponseDataList>): ListAuditSummaryInfosResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AuditSummaryResponseDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AuditSummaryResponseDataList> | undefined {
        return this['data_list'];
    }
    public withTotal(total: number): ListAuditSummaryInfosResponse {
        this['total'] = total;
        return this;
    }
}