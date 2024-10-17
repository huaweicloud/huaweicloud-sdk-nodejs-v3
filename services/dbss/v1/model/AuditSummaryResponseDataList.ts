

export class AuditSummaryResponseDataList {
    public id?: number;
    public status?: string;
    private 'project_id'?: string;
    private 'instance_id'?: number;
    private 'instance_name'?: string;
    private 'audit_duration'?: number;
    private 'total_sql'?: number;
    private 'total_risk'?: number;
    private 'today_sql'?: number;
    private 'today_risk'?: number;
    private 'today_session'?: number;
    private 'update_time'?: number;
    public reserve1?: string;
    public reserve2?: string;
    public constructor() { 
    }
    public withId(id: number): AuditSummaryResponseDataList {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): AuditSummaryResponseDataList {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): AuditSummaryResponseDataList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: number): AuditSummaryResponseDataList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): AuditSummaryResponseDataList {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withAuditDuration(auditDuration: number): AuditSummaryResponseDataList {
        this['audit_duration'] = auditDuration;
        return this;
    }
    public set auditDuration(auditDuration: number  | undefined) {
        this['audit_duration'] = auditDuration;
    }
    public get auditDuration(): number | undefined {
        return this['audit_duration'];
    }
    public withTotalSql(totalSql: number): AuditSummaryResponseDataList {
        this['total_sql'] = totalSql;
        return this;
    }
    public set totalSql(totalSql: number  | undefined) {
        this['total_sql'] = totalSql;
    }
    public get totalSql(): number | undefined {
        return this['total_sql'];
    }
    public withTotalRisk(totalRisk: number): AuditSummaryResponseDataList {
        this['total_risk'] = totalRisk;
        return this;
    }
    public set totalRisk(totalRisk: number  | undefined) {
        this['total_risk'] = totalRisk;
    }
    public get totalRisk(): number | undefined {
        return this['total_risk'];
    }
    public withTodaySql(todaySql: number): AuditSummaryResponseDataList {
        this['today_sql'] = todaySql;
        return this;
    }
    public set todaySql(todaySql: number  | undefined) {
        this['today_sql'] = todaySql;
    }
    public get todaySql(): number | undefined {
        return this['today_sql'];
    }
    public withTodayRisk(todayRisk: number): AuditSummaryResponseDataList {
        this['today_risk'] = todayRisk;
        return this;
    }
    public set todayRisk(todayRisk: number  | undefined) {
        this['today_risk'] = todayRisk;
    }
    public get todayRisk(): number | undefined {
        return this['today_risk'];
    }
    public withTodaySession(todaySession: number): AuditSummaryResponseDataList {
        this['today_session'] = todaySession;
        return this;
    }
    public set todaySession(todaySession: number  | undefined) {
        this['today_session'] = todaySession;
    }
    public get todaySession(): number | undefined {
        return this['today_session'];
    }
    public withUpdateTime(updateTime: number): AuditSummaryResponseDataList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withReserve1(reserve1: string): AuditSummaryResponseDataList {
        this['reserve1'] = reserve1;
        return this;
    }
    public withReserve2(reserve2: string): AuditSummaryResponseDataList {
        this['reserve2'] = reserve2;
        return this;
    }
}