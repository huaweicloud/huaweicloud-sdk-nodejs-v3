

export class BatchDeleteSchedulesRequestBody {
    private 'object_id'?: string;
    private 'schedule_ids'?: Array<string>;
    public constructor(objectId?: string, scheduleIds?: Array<string>) { 
        this['object_id'] = objectId;
        this['schedule_ids'] = scheduleIds;
    }
    public withObjectId(objectId: string): BatchDeleteSchedulesRequestBody {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withScheduleIds(scheduleIds: Array<string>): BatchDeleteSchedulesRequestBody {
        this['schedule_ids'] = scheduleIds;
        return this;
    }
    public set scheduleIds(scheduleIds: Array<string>  | undefined) {
        this['schedule_ids'] = scheduleIds;
    }
    public get scheduleIds(): Array<string> | undefined {
        return this['schedule_ids'];
    }
}