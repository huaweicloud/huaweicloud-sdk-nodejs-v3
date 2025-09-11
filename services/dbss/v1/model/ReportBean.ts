

export class ReportBean {
    private 'db_ids'?: string;
    private 'db_names'?: string;
    private 'end_time'?: string;
    private 'finish_time'?: string;
    public format?: string;
    public id?: string;
    public name?: string;
    public percentum?: number;
    private 'start_time'?: string;
    private 'template_type'?: string;
    public type?: string;
    public url?: string;
    public constructor() { 
    }
    public withDbIds(dbIds: string): ReportBean {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withDbNames(dbNames: string): ReportBean {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: string  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): string | undefined {
        return this['db_names'];
    }
    public withEndTime(endTime: string): ReportBean {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFinishTime(finishTime: string): ReportBean {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withFormat(format: string): ReportBean {
        this['format'] = format;
        return this;
    }
    public withId(id: string): ReportBean {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ReportBean {
        this['name'] = name;
        return this;
    }
    public withPercentum(percentum: number): ReportBean {
        this['percentum'] = percentum;
        return this;
    }
    public withStartTime(startTime: string): ReportBean {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withTemplateType(templateType: string): ReportBean {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withType(type: string): ReportBean {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ReportBean {
        this['url'] = url;
        return this;
    }
}