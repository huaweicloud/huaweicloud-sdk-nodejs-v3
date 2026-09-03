

export class HealthReportTaskInfo {
    private 'task_id'?: string;
    private 'instance_id'?: string;
    private 'create_at'?: number;
    private 'report_status'?: string;
    private 'risk_count'?: number;
    public origin?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor() { 
    }
    public withTaskId(taskId: string): HealthReportTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): HealthReportTaskInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCreateAt(createAt: number): HealthReportTaskInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withReportStatus(reportStatus: string): HealthReportTaskInfo {
        this['report_status'] = reportStatus;
        return this;
    }
    public set reportStatus(reportStatus: string  | undefined) {
        this['report_status'] = reportStatus;
    }
    public get reportStatus(): string | undefined {
        return this['report_status'];
    }
    public withRiskCount(riskCount: number): HealthReportTaskInfo {
        this['risk_count'] = riskCount;
        return this;
    }
    public set riskCount(riskCount: number  | undefined) {
        this['risk_count'] = riskCount;
    }
    public get riskCount(): number | undefined {
        return this['risk_count'];
    }
    public withOrigin(origin: string): HealthReportTaskInfo {
        this['origin'] = origin;
        return this;
    }
    public withStartAt(startAt: number): HealthReportTaskInfo {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): HealthReportTaskInfo {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}