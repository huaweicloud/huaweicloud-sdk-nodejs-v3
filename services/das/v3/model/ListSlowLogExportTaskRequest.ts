

export class ListSlowLogExportTaskRequest {
    private 'instance_id'?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'export_type'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListSlowLogExportTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCurPage(curPage: number): ListSlowLogExportTaskRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListSlowLogExportTaskRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withExportType(exportType: string): ListSlowLogExportTaskRequest {
        this['export_type'] = exportType;
        return this;
    }
    public set exportType(exportType: string  | undefined) {
        this['export_type'] = exportType;
    }
    public get exportType(): string | undefined {
        return this['export_type'];
    }
}