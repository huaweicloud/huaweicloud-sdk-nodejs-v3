

export class CustomMetadata {
    public description?: string;
    public type?: string;
    private 'task_id'?: string;
    public constructor() { 
    }
    public withDescription(description: string): CustomMetadata {
        this['description'] = description;
        return this;
    }
    public withType(type: string): CustomMetadata {
        this['type'] = type;
        return this;
    }
    public withTaskId(taskId: string): CustomMetadata {
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