

export class ListVulScanTaskHostRequest {
    private 'task_id'?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'scan_status'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ListVulScanTaskHostRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulScanTaskHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulScanTaskHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulScanTaskHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withScanStatus(scanStatus: string): ListVulScanTaskHostRequest {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
}