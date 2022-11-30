

export class ListHostRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public page?: number;
    public pagesize?: number;
    public hostname?: string;
    public policyname?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListHostRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListHostRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withHostname(hostname: string): ListHostRequest {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyname(policyname: string): ListHostRequest {
        this['policyname'] = policyname;
        return this;
    }
}