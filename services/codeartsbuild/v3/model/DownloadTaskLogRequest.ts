

export class DownloadTaskLogRequest {
    private 'record_id'?: string;
    private 'task_name'?: string;
    private 'log_level'?: string;
    public constructor(recordId?: string, taskName?: string) { 
        this['record_id'] = recordId;
        this['task_name'] = taskName;
    }
    public withRecordId(recordId: string): DownloadTaskLogRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withTaskName(taskName: string): DownloadTaskLogRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withLogLevel(logLevel: string): DownloadTaskLogRequest {
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