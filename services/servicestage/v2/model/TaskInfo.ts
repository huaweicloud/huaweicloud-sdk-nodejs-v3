

export class TaskInfo {
    private 'CREATED_AT'?: string;
    private 'LAST_HEALTH_CHECK'?: string;
    private 'MESSAGES'?: string;
    private 'OWNER_ID'?: string;
    private 'TASK_ID'?: string;
    private 'TASK_INDEX'?: number;
    private 'TASK_NAME'?: string;
    private 'TASK_STATUS'?: TaskInfoTaskStatusEnum | string;
    private 'TASK_TYPE'?: string;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): TaskInfo {
        this['CREATED_AT'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['CREATED_AT'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['CREATED_AT'];
    }
    public withLastHealthCheck(lastHealthCheck: string): TaskInfo {
        this['LAST_HEALTH_CHECK'] = lastHealthCheck;
        return this;
    }
    public set lastHealthCheck(lastHealthCheck: string  | undefined) {
        this['LAST_HEALTH_CHECK'] = lastHealthCheck;
    }
    public get lastHealthCheck(): string | undefined {
        return this['LAST_HEALTH_CHECK'];
    }
    public withMessages(messages: string): TaskInfo {
        this['MESSAGES'] = messages;
        return this;
    }
    public set messages(messages: string  | undefined) {
        this['MESSAGES'] = messages;
    }
    public get messages(): string | undefined {
        return this['MESSAGES'];
    }
    public withOwnerId(ownerId: string): TaskInfo {
        this['OWNER_ID'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['OWNER_ID'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['OWNER_ID'];
    }
    public withTaskId(taskId: string): TaskInfo {
        this['TASK_ID'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['TASK_ID'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['TASK_ID'];
    }
    public withTaskIndex(taskIndex: number): TaskInfo {
        this['TASK_INDEX'] = taskIndex;
        return this;
    }
    public set taskIndex(taskIndex: number  | undefined) {
        this['TASK_INDEX'] = taskIndex;
    }
    public get taskIndex(): number | undefined {
        return this['TASK_INDEX'];
    }
    public withTaskName(taskName: string): TaskInfo {
        this['TASK_NAME'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['TASK_NAME'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['TASK_NAME'];
    }
    public withTaskStatus(taskStatus: TaskInfoTaskStatusEnum | string): TaskInfo {
        this['TASK_STATUS'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: TaskInfoTaskStatusEnum | string  | undefined) {
        this['TASK_STATUS'] = taskStatus;
    }
    public get taskStatus(): TaskInfoTaskStatusEnum | string | undefined {
        return this['TASK_STATUS'];
    }
    public withTaskType(taskType: string): TaskInfo {
        this['TASK_TYPE'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['TASK_TYPE'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['TASK_TYPE'];
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
