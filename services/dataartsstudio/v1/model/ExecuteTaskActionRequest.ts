

export class ExecuteTaskActionRequest {
    public workspace?: string;
    private 'task_id'?: string;
    public action?: string;
    public constructor(workspace?: string, taskId?: string, action?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
        this['action'] = action;
    }
    public withWorkspace(workspace: string): ExecuteTaskActionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTaskId(taskId: string): ExecuteTaskActionRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withAction(action: string): ExecuteTaskActionRequest {
        this['action'] = action;
        return this;
    }
}