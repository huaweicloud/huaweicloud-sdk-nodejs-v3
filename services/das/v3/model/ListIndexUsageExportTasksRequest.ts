

export class ListIndexUsageExportTasksRequest {
    private 'instance_id'?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListIndexUsageExportTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCurPage(curPage: number): ListIndexUsageExportTasksRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListIndexUsageExportTasksRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}