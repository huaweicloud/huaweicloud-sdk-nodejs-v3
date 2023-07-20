

export class TaskSuccessRate {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'success_rate'?: string;
    private 'record_count'?: number;
    private 'success_record_count'?: number;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskSuccessRate {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): TaskSuccessRate {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withSuccessRate(successRate: string): TaskSuccessRate {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: string  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): string | undefined {
        return this['success_rate'];
    }
    public withRecordCount(recordCount: number): TaskSuccessRate {
        this['record_count'] = recordCount;
        return this;
    }
    public set recordCount(recordCount: number  | undefined) {
        this['record_count'] = recordCount;
    }
    public get recordCount(): number | undefined {
        return this['record_count'];
    }
    public withSuccessRecordCount(successRecordCount: number): TaskSuccessRate {
        this['success_record_count'] = successRecordCount;
        return this;
    }
    public set successRecordCount(successRecordCount: number  | undefined) {
        this['success_record_count'] = successRecordCount;
    }
    public get successRecordCount(): number | undefined {
        return this['success_record_count'];
    }
}