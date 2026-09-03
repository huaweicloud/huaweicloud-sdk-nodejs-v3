

export class ListFullSqlExportTasksRequest {
    private 'instance_id'?: string;
    private 'task_id'?: number;
    private 'page_size'?: number;
    private 'page_no'?: number;
    public constructor(instanceId?: string, pageSize?: number, pageNo?: number) { 
        this['instance_id'] = instanceId;
        this['page_size'] = pageSize;
        this['page_no'] = pageNo;
    }
    public withInstanceId(instanceId: string): ListFullSqlExportTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: number): ListFullSqlExportTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withPageSize(pageSize: number): ListFullSqlExportTasksRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: number): ListFullSqlExportTasksRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
}