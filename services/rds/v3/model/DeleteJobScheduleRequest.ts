

export class DeleteJobScheduleRequest {
    private 'schedule_id'?: string;
    public constructor(scheduleId?: string) { 
        this['schedule_id'] = scheduleId;
    }
    public withScheduleId(scheduleId: string): DeleteJobScheduleRequest {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
}