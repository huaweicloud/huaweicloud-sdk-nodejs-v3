

export class ListImageScanTaskRequest {
    private 'enterprise_project_id'?: string;
    private 'global_image_type'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    private 'task_type'?: string;
    private 'task_name'?: string;
    private 'task_id'?: string;
    private 'create_time'?: number;
    private 'end_time'?: number;
    private 'task_status'?: string;
    private 'scan_scope'?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageScanTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalImageType(globalImageType: string): ListImageScanTaskRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withOffset(offset: number): ListImageScanTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageScanTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListImageScanTaskRequest {
        this['type'] = type;
        return this;
    }
    public withTaskType(taskType: string): ListImageScanTaskRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskName(taskName: string): ListImageScanTaskRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskId(taskId: string): ListImageScanTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withCreateTime(createTime: number): ListImageScanTaskRequest {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: number): ListImageScanTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTaskStatus(taskStatus: string): ListImageScanTaskRequest {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withScanScope(scanScope: number): ListImageScanTaskRequest {
        this['scan_scope'] = scanScope;
        return this;
    }
    public set scanScope(scanScope: number  | undefined) {
        this['scan_scope'] = scanScope;
    }
    public get scanScope(): number | undefined {
        return this['scan_scope'];
    }
}