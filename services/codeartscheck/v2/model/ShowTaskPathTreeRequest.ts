

export class ShowTaskPathTreeRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    private 'current_path'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, taskId?: string) { 
        this['project_id'] = projectId;
        this['task_id'] = taskId;
    }
    public withProjectId(projectId: string): ShowTaskPathTreeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): ShowTaskPathTreeRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withCurrentPath(currentPath: string): ShowTaskPathTreeRequest {
        this['current_path'] = currentPath;
        return this;
    }
    public set currentPath(currentPath: string  | undefined) {
        this['current_path'] = currentPath;
    }
    public get currentPath(): string | undefined {
        return this['current_path'];
    }
    public withOffset(offset: number): ShowTaskPathTreeRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTaskPathTreeRequest {
        this['limit'] = limit;
        return this;
    }
}