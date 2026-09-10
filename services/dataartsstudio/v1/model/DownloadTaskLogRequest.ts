

export class DownloadTaskLogRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'task_id'?: string;
    public path?: string;
    public range?: string;
    public constructor(workspace?: string, taskId?: string, path?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
        this['path'] = path;
    }
    public withWorkspace(workspace: string): DownloadTaskLogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): DownloadTaskLogRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withTaskId(taskId: string): DownloadTaskLogRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPath(path: string): DownloadTaskLogRequest {
        this['path'] = path;
        return this;
    }
    public withRange(range: string): DownloadTaskLogRequest {
        this['range'] = range;
        return this;
    }
}