

export class ShowTaskInfoRequest {
    public workspace?: string;
    private 'task_id'?: string;
    public constructor(workspace?: string, taskId?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
    }
    public withWorkspace(workspace: string): ShowTaskInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTaskId(taskId: string): ShowTaskInfoRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}