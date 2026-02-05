

export class ShowMigrationLogRequest {
    private 'instance_id'?: string;
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, taskId?: string) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): ShowMigrationLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): ShowMigrationLogRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ShowMigrationLogRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowMigrationLogRequest {
        this['limit'] = limit;
        return this;
    }
}