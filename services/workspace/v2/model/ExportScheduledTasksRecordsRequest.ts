

export class ExportScheduledTasksRecordsRequest {
    private 'task_id'?: string;
    public language?: string;
    private 'time_zone'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ExportScheduledTasksRecordsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withLanguage(language: string): ExportScheduledTasksRecordsRequest {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): ExportScheduledTasksRecordsRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}