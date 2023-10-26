

export class ListMigrationTaskLogsRequest {
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'log_level'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ListMigrationTaskLogsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ListMigrationTaskLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMigrationTaskLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withLogLevel(logLevel: string): ListMigrationTaskLogsRequest {
        this['log_level'] = logLevel;
        return this;
    }
    public set logLevel(logLevel: string  | undefined) {
        this['log_level'] = logLevel;
    }
    public get logLevel(): string | undefined {
        return this['log_level'];
    }
}