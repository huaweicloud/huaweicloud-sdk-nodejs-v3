

export class ShowTaskRequest {
    private 'task_id'?: number;
    public constructor(taskId?: number) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: number): ShowTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
}