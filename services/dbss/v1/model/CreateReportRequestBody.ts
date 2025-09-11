

export class CreateReportRequestBody {
    private 'db_ids'?: string;
    private 'end_date'?: Date;
    private 'end_time'?: string;
    private 'start_date'?: Date;
    private 'start_time'?: string;
    private 'template_id'?: string;
    public constructor(endTime?: string, startTime?: string, templateId?: string) { 
        this['end_time'] = endTime;
        this['start_time'] = startTime;
        this['template_id'] = templateId;
    }
    public withDbIds(dbIds: string): CreateReportRequestBody {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withEndDate(endDate: Date): CreateReportRequestBody {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: Date  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): Date | undefined {
        return this['end_date'];
    }
    public withEndTime(endTime: string): CreateReportRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStartDate(startDate: Date): CreateReportRequestBody {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: Date  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): Date | undefined {
        return this['start_date'];
    }
    public withStartTime(startTime: string): CreateReportRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withTemplateId(templateId: string): CreateReportRequestBody {
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