

export class ListJobSchedulesRequest {
    private 'schedule_type'?: string;
    private 'schedule_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withScheduleType(scheduleType: string): ListJobSchedulesRequest {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withScheduleId(scheduleId: string): ListJobSchedulesRequest {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
    public withOffset(offset: number): ListJobSchedulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobSchedulesRequest {
        this['limit'] = limit;
        return this;
    }
}