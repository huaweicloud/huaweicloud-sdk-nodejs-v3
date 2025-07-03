

export class ExecuteActionParamsV2 {
    private 'task_id'?: string;
    public action?: string;
    public params?: object;
    public constructor(taskId?: string, action?: string) { 
        this['task_id'] = taskId;
        this['action'] = action;
    }
    public withTaskId(taskId: string): ExecuteActionParamsV2 {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withAction(action: string): ExecuteActionParamsV2 {
        this['action'] = action;
        return this;
    }
    public withParams(params: object): ExecuteActionParamsV2 {
        this['params'] = params;
        return this;
    }
}