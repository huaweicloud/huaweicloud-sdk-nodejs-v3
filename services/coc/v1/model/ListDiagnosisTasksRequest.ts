

export class ListDiagnosisTasksRequest {
    private 'task_id'?: string;
    public type?: ListDiagnosisTasksRequestTypeEnum | string;
    public status?: ListDiagnosisTasksRequestStatusEnum | string;
    public region?: string;
    public creator?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withTaskId(taskId: string): ListDiagnosisTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withType(type: ListDiagnosisTasksRequestTypeEnum | string): ListDiagnosisTasksRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ListDiagnosisTasksRequestStatusEnum | string): ListDiagnosisTasksRequest {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): ListDiagnosisTasksRequest {
        this['region'] = region;
        return this;
    }
    public withCreator(creator: string): ListDiagnosisTasksRequest {
        this['creator'] = creator;
        return this;
    }
    public withStartTime(startTime: number): ListDiagnosisTasksRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListDiagnosisTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPageIndex(pageIndex: number): ListDiagnosisTasksRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListDiagnosisTasksRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOffset(offset: number): ListDiagnosisTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDiagnosisTasksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDiagnosisTasksRequestTypeEnum {
    ECS = 'ECS',
    RDS = 'RDS',
    DCS = 'DCS',
    DMS = 'DMS',
    ELB = 'ELB'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDiagnosisTasksRequestStatusEnum {
    CANCEL = 'cancel',
    EXECUTING = 'executing',
    WAITING = 'waiting',
    FAILED = 'failed',
    FINISH = 'finish'
}
