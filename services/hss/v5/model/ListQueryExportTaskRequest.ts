

export class ListQueryExportTaskRequest {
    private 'task_id'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public constructor(taskId?: string, region?: string) { 
        this['task_id'] = taskId;
        this['region'] = region;
    }
    public withTaskId(taskId: string): ListQueryExportTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withRegion(region: string): ListQueryExportTaskRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListQueryExportTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}