

export class ShowTasksRulesetsRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, taskId?: string) { 
        this['project_id'] = projectId;
        this['task_id'] = taskId;
    }
    public withProjectId(projectId: string): ShowTasksRulesetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): ShowTasksRulesetsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ShowTasksRulesetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTasksRulesetsRequest {
        this['limit'] = limit;
        return this;
    }
}