

export class ListProjectWorkHoursRequestBody {
    private 'project_ids'?: Array<string>;
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
    public withProjectIds(projectIds: Array<string>): ListProjectWorkHoursRequestBody {
        this['project_ids'] = projectIds;
        return this;
    }
    public set projectIds(projectIds: Array<string>  | undefined) {
        this['project_ids'] = projectIds;
    }
    public get projectIds(): Array<string> | undefined {
        return this['project_ids'];
    }
    public withUserIds(userIds: Array<string>): ListProjectWorkHoursRequestBody {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<string> | undefined {
        return this['user_ids'];
    }
    public withWorkHoursTypes(workHoursTypes: string): ListProjectWorkHoursRequestBody {
        this['work_hours_types'] = workHoursTypes;
        return this;
    }
    public set workHoursTypes(workHoursTypes: string  | undefined) {
        this['work_hours_types'] = workHoursTypes;
    }
    public get workHoursTypes(): string | undefined {
        return this['work_hours_types'];
    }
    public withWorkHoursDates(workHoursDates: string): ListProjectWorkHoursRequestBody {
        this['work_hours_dates'] = workHoursDates;
        return this;
    }
    public set workHoursDates(workHoursDates: string  | undefined) {
        this['work_hours_dates'] = workHoursDates;
    }
    public get workHoursDates(): string | undefined {
        return this['work_hours_dates'];
    }
    public withBeginTime(beginTime: string): ListProjectWorkHoursRequestBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListProjectWorkHoursRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListProjectWorkHoursRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectWorkHoursRequestBody {
        this['limit'] = limit;
        return this;
    }
}