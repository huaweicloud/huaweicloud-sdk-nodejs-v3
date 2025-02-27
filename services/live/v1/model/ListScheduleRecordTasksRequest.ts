

export class ListScheduleRecordTasksRequest {
    private 'start_time'?: number;
    private 'end_time'?: number;
    public domain?: string;
    public app?: string;
    public stream?: string;
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(endTime?: number) { 
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: number): ListScheduleRecordTasksRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListScheduleRecordTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDomain(domain: string): ListScheduleRecordTasksRequest {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ListScheduleRecordTasksRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListScheduleRecordTasksRequest {
        this['stream'] = stream;
        return this;
    }
    public withTaskId(taskId: string): ListScheduleRecordTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ListScheduleRecordTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduleRecordTasksRequest {
        this['limit'] = limit;
        return this;
    }
}