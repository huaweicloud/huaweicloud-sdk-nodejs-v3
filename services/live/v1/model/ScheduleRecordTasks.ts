

export class ScheduleRecordTasks {
    public domain?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'template_id'?: string;
    private 'stop_time'?: number;
    private 'task_id'?: string;
    public constructor(domain?: string, app?: string, stream?: string, endTime?: number, templateId?: string) { 
        this['domain'] = domain;
        this['app'] = app;
        this['stream'] = stream;
        this['end_time'] = endTime;
        this['template_id'] = templateId;
    }
    public withDomain(domain: string): ScheduleRecordTasks {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ScheduleRecordTasks {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ScheduleRecordTasks {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: number): ScheduleRecordTasks {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ScheduleRecordTasks {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTemplateId(templateId: string): ScheduleRecordTasks {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withStopTime(stopTime: number): ScheduleRecordTasks {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: number  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): number | undefined {
        return this['stop_time'];
    }
    public withTaskId(taskId: string): ScheduleRecordTasks {
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