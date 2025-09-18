

export class CancelInfo {
    public id?: string;
    private 'task_id'?: string;
    public constructor() { 
    }
    public withId(id: string): CancelInfo {
        this['id'] = id;
        return this;
    }
    public withTaskId(taskId: string): CancelInfo {
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