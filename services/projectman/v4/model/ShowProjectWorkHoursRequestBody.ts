

export class ShowProjectWorkHoursRequestBody {
    private 'user_ids'?: Array<string>;
    private 'work_hours_types'?: string;
    private 'work_hours_dates'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withUserIds(userIds: Array<string>): ShowProjectWorkHoursRequestBody {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<string> | undefined {
        return this['user_ids'];
    }
    public withWorkHoursTypes(workHoursTypes: string): ShowProjectWorkHoursRequestBody {
        this['work_hours_types'] = workHoursTypes;
        return this;
    }
    public set workHoursTypes(workHoursTypes: string  | undefined) {
        this['work_hours_types'] = workHoursTypes;
    }
    public get workHoursTypes(): string | undefined {
        return this['work_hours_types'];
    }
    public withWorkHoursDates(workHoursDates: string): ShowProjectWorkHoursRequestBody {
        this['work_hours_dates'] = workHoursDates;
        return this;
    }
    public set workHoursDates(workHoursDates: string  | undefined) {
        this['work_hours_dates'] = workHoursDates;
    }
    public get workHoursDates(): string | undefined {
        return this['work_hours_dates'];
    }
    public withBeginTime(beginTime: string): ShowProjectWorkHoursRequestBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowProjectWorkHoursRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowProjectWorkHoursRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowProjectWorkHoursRequestBody {
        this['limit'] = limit;
        return this;
    }
}