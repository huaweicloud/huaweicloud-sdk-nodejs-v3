

export class ListScheduledTaskHistoryRequest {
    private 'task_id'?: string;
    public id?: string;
    public region?: string;
    public status?: string;
    private 'started_start_time'?: number;
    private 'started_end_time'?: number;
    private 'finished_start_time'?: number;
    private 'finished_end_time'?: number;
    public marker?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListScheduledTaskHistoryRequestSortKeyEnum | string;
    private 'sort_dir'?: ListScheduledTaskHistoryRequestSortDirEnum | string;
    public constructor(taskId?: string, limit?: number) { 
        this['task_id'] = taskId;
        this['limit'] = limit;
    }
    public withTaskId(taskId: string): ListScheduledTaskHistoryRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withId(id: string): ListScheduledTaskHistoryRequest {
        this['id'] = id;
        return this;
    }
    public withRegion(region: string): ListScheduledTaskHistoryRequest {
        this['region'] = region;
        return this;
    }
    public withStatus(status: string): ListScheduledTaskHistoryRequest {
        this['status'] = status;
        return this;
    }
    public withStartedStartTime(startedStartTime: number): ListScheduledTaskHistoryRequest {
        this['started_start_time'] = startedStartTime;
        return this;
    }
    public set startedStartTime(startedStartTime: number  | undefined) {
        this['started_start_time'] = startedStartTime;
    }
    public get startedStartTime(): number | undefined {
        return this['started_start_time'];
    }
    public withStartedEndTime(startedEndTime: number): ListScheduledTaskHistoryRequest {
        this['started_end_time'] = startedEndTime;
        return this;
    }
    public set startedEndTime(startedEndTime: number  | undefined) {
        this['started_end_time'] = startedEndTime;
    }
    public get startedEndTime(): number | undefined {
        return this['started_end_time'];
    }
    public withFinishedStartTime(finishedStartTime: number): ListScheduledTaskHistoryRequest {
        this['finished_start_time'] = finishedStartTime;
        return this;
    }
    public set finishedStartTime(finishedStartTime: number  | undefined) {
        this['finished_start_time'] = finishedStartTime;
    }
    public get finishedStartTime(): number | undefined {
        return this['finished_start_time'];
    }
    public withFinishedEndTime(finishedEndTime: number): ListScheduledTaskHistoryRequest {
        this['finished_end_time'] = finishedEndTime;
        return this;
    }
    public set finishedEndTime(finishedEndTime: number  | undefined) {
        this['finished_end_time'] = finishedEndTime;
    }
    public get finishedEndTime(): number | undefined {
        return this['finished_end_time'];
    }
    public withMarker(marker: string): ListScheduledTaskHistoryRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListScheduledTaskHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduledTaskHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ListScheduledTaskHistoryRequestSortKeyEnum | string): ListScheduledTaskHistoryRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListScheduledTaskHistoryRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListScheduledTaskHistoryRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListScheduledTaskHistoryRequestSortDirEnum | string): ListScheduledTaskHistoryRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListScheduledTaskHistoryRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListScheduledTaskHistoryRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskHistoryRequestSortKeyEnum {
    STARTED_TIME = 'started_time',
    FINISHED_TIME = 'finished_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScheduledTaskHistoryRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
