

export class ShowTaskStatisticsRequest {
    private 'enterprise_project_id'?: string;
    private 'task_type'?: string;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowTaskStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTaskType(taskType: string): ShowTaskStatisticsRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}