

export class ListQualityTaskRequest {
    private 'category_id'?: number;
    public name?: string;
    private 'schedule_status'?: ListQualityTaskRequestScheduleStatusEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public creator?: string;
    public limit?: number;
    public offset?: number;
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withCategoryId(categoryId: number): ListQualityTaskRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withName(name: string): ListQualityTaskRequest {
        this['name'] = name;
        return this;
    }
    public withScheduleStatus(scheduleStatus: ListQualityTaskRequestScheduleStatusEnum | string): ListQualityTaskRequest {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: ListQualityTaskRequestScheduleStatusEnum | string  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): ListQualityTaskRequestScheduleStatusEnum | string | undefined {
        return this['schedule_status'];
    }
    public withStartTime(startTime: number): ListQualityTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListQualityTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCreator(creator: string): ListQualityTaskRequest {
        this['creator'] = creator;
        return this;
    }
    public withLimit(limit: number): ListQualityTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListQualityTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withWorkspace(workspace: string): ListQualityTaskRequest {
        this['workspace'] = workspace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQualityTaskRequestScheduleStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_START = 'NOT_START',
    SCHEDULING = 'SCHEDULING',
    FINISH_SUCCESS = 'FINISH_SUCCESS',
    KILL = 'KILL',
    RUNNING_EXCEPTION = 'RUNNING_EXCEPTION'
}
