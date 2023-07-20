

export class CommonCreateTaskRsp {
    private 'task_id'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): CommonCreateTaskRsp {
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