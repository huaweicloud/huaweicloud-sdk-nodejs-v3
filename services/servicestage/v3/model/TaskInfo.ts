

export class TaskInfo {
    private 'created_at'?: string;
    private 'update_at'?: string;
    public messages?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'task_status'?: TaskInfoTaskStatusEnum | string;
    private 'task_type'?: string;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): TaskInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdateAt(updateAt: string): TaskInfo {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withMessages(messages: string): TaskInfo {
        this['messages'] = messages;
        return this;
    }
    public withTaskId(taskId: string): TaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): TaskInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskStatus(taskStatus: TaskInfoTaskStatusEnum | string): TaskInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: TaskInfoTaskStatusEnum | string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): TaskInfoTaskStatusEnum | string | undefined {
        return this['task_status'];
    }
    public withTaskType(taskType: string): TaskInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskInfoTaskStatusEnum {
    RUNNING = 'RUNNING',
    SKIPPED = 'SKIPPED',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
