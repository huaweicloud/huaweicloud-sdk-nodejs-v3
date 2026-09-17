

export class ListMissingIndexExportTasksRequest {
    private 'instance_id'?: string;
    private 'export_type'?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public constructor(instanceId?: string, exportType?: string) { 
        this['instance_id'] = instanceId;
        this['export_type'] = exportType;
    }
    public withInstanceId(instanceId: string): ListMissingIndexExportTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withExportType(exportType: string): ListMissingIndexExportTasksRequest {
        this['export_type'] = exportType;
        return this;
    }
    public set exportType(exportType: string  | undefined) {
        this['export_type'] = exportType;
    }
    public get exportType(): string | undefined {
        return this['export_type'];
    }
    public withCurPage(curPage: number): ListMissingIndexExportTasksRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListMissingIndexExportTasksRequest {
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