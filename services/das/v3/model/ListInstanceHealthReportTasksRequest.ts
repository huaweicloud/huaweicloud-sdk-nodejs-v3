

export class ListInstanceHealthReportTasksRequest {
    private 'instance_id'?: string;
    private 'start_at'?: string;
    private 'end_at'?: string;
    private 'page_num'?: string;
    private 'page_size'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceHealthReportTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: string): ListInstanceHealthReportTasksRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: string  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): string | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: string): ListInstanceHealthReportTasksRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: string  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): string | undefined {
        return this['end_at'];
    }
    public withPageNum(pageNum: string): ListInstanceHealthReportTasksRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: string  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): string | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: string): ListInstanceHealthReportTasksRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
}