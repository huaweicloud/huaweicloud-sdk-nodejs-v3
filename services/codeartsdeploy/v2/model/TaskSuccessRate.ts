

export class TaskSuccessRate {
    private 'task_id'?: string | undefined;
    private 'task_name'?: string | undefined;
    private 'success_rate'?: string | undefined;
    private 'record_count'?: number | undefined;
    private 'success_record_count'?: number | undefined;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskSuccessRate {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskName(taskName: string): TaskSuccessRate {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withSuccessRate(successRate: string): TaskSuccessRate {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: string | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate() {
        return this['success_rate'];
    }
    public withRecordCount(recordCount: number): TaskSuccessRate {
        this['record_count'] = recordCount;
        return this;
    }
    public set recordCount(recordCount: number | undefined) {
        this['record_count'] = recordCount;
    }
    public get recordCount() {
        return this['record_count'];
    }
    public withSuccessRecordCount(successRecordCount: number): TaskSuccessRate {
        this['success_record_count'] = successRecordCount;
        return this;
    }
    public set successRecordCount(successRecordCount: number | undefined) {
        this['success_record_count'] = successRecordCount;
    }
    public get successRecordCount() {
        return this['success_record_count'];
    }
}