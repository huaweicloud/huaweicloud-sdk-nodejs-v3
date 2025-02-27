

export class ScheduleRecordTasksReq {
    public domain?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'template_id'?: string;
    public constructor(domain?: string, app?: string, stream?: string, endTime?: number, templateId?: string) { 
        this['domain'] = domain;
        this['app'] = app;
        this['stream'] = stream;
        this['end_time'] = endTime;
        this['template_id'] = templateId;
    }
    public withDomain(domain: string): ScheduleRecordTasksReq {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ScheduleRecordTasksReq {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ScheduleRecordTasksReq {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: number): ScheduleRecordTasksReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ScheduleRecordTasksReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTemplateId(templateId: string): ScheduleRecordTasksReq {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}