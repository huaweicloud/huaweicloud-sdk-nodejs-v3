

export class ListInstanceStatusRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    private 'instance_ids'?: Array<string>;
    private 'run_status'?: number;
    public constructor() { 
    }
    public withContentType(contentType: string): ListInstanceStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListInstanceStatusRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListInstanceStatusRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withInstanceIds(instanceIds: Array<string>): ListInstanceStatusRequest {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withRunStatus(runStatus: number): ListInstanceStatusRequest {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): number | undefined {
        return this['run_status'];
    }
}