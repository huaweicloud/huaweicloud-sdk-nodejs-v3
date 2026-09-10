

export class ListTaskLogsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'task_id'?: string;
    public path?: string;
    public constructor(workspace?: string, taskId?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
    }
    public withWorkspace(workspace: string): ListTaskLogsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListTaskLogsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withTaskId(taskId: string): ListTaskLogsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPath(path: string): ListTaskLogsRequest {
        this['path'] = path;
        return this;
    }
}