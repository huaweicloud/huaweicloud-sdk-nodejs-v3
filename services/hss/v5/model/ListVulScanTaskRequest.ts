

export class ListVulScanTaskRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'scan_type'?: string;
    private 'task_id'?: string;
    private 'min_start_time'?: number;
    private 'max_start_time'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulScanTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulScanTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulScanTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withScanType(scanType: string): ListVulScanTaskRequest {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withTaskId(taskId: string): ListVulScanTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withMinStartTime(minStartTime: number): ListVulScanTaskRequest {
        this['min_start_time'] = minStartTime;
        return this;
    }
    public set minStartTime(minStartTime: number  | undefined) {
        this['min_start_time'] = minStartTime;
    }
    public get minStartTime(): number | undefined {
        return this['min_start_time'];
    }
    public withMaxStartTime(maxStartTime: number): ListVulScanTaskRequest {
        this['max_start_time'] = maxStartTime;
        return this;
    }
    public set maxStartTime(maxStartTime: number  | undefined) {
        this['max_start_time'] = maxStartTime;
    }
    public get maxStartTime(): number | undefined {
        return this['max_start_time'];
    }
}