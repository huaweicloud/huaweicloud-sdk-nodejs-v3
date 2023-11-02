

export class ListConsistencyTaskRequest {
    private 'category_id'?: number;
    public name?: string;
    private 'schedule_status'?: ListConsistencyTaskRequestScheduleStatusEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public creator?: string;
    public limit?: number;
    public offset?: number;
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withCategoryId(categoryId: number): ListConsistencyTaskRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withName(name: string): ListConsistencyTaskRequest {
        this['name'] = name;
        return this;
    }
    public withScheduleStatus(scheduleStatus: ListConsistencyTaskRequestScheduleStatusEnum | string): ListConsistencyTaskRequest {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: ListConsistencyTaskRequestScheduleStatusEnum | string  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): ListConsistencyTaskRequestScheduleStatusEnum | string | undefined {
        return this['schedule_status'];
    }
    public withStartTime(startTime: number): ListConsistencyTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListConsistencyTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCreator(creator: string): ListConsistencyTaskRequest {
        this['creator'] = creator;
        return this;
    }
    public withLimit(limit: number): ListConsistencyTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListConsistencyTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withWorkspace(workspace: string): ListConsistencyTaskRequest {
        this['workspace'] = workspace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConsistencyTaskRequestScheduleStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_START = 'NOT_START',
    SCHEDULING = 'SCHEDULING',
    FINISH_SUCCESS = 'FINISH_SUCCESS',
    KILL = 'KILL',
    RUNNING_EXCEPTION = 'RUNNING_EXCEPTION'
}
