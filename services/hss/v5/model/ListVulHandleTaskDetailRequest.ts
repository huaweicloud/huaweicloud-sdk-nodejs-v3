

export class ListVulHandleTaskDetailRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'task_id'?: string;
    private 'handle_status'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHandleTaskDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListVulHandleTaskDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVulHandleTaskDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withTaskId(taskId: string): ListVulHandleTaskDetailRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withHandleStatus(handleStatus: string): ListVulHandleTaskDetailRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
}