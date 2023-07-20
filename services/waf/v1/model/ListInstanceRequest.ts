

export class ListInstanceRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    public instancename?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListInstanceRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListInstanceRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withInstancename(instancename: string): ListInstanceRequest {
        this['instancename'] = instancename;
        return this;
    }
}