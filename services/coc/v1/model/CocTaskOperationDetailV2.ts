

export class CocTaskOperationDetailV2 {
    private 'task_id'?: string;
    public key?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): CocTaskOperationDetailV2 {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withKey(key: string): CocTaskOperationDetailV2 {
        this['key'] = key;
        return this;
    }
}