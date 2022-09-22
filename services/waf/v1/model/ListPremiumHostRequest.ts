

export class ListPremiumHostRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public page?: string;
    public pagesize?: string;
    public hostname?: string;
    public policyname?: string;
    private 'protect_status'?: number | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListPremiumHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPremiumHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPage(page: string): ListPremiumHostRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: string): ListPremiumHostRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withHostname(hostname: string): ListPremiumHostRequest {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyname(policyname: string): ListPremiumHostRequest {
        this['policyname'] = policyname;
        return this;
    }
    public withProtectStatus(protectStatus: number): ListPremiumHostRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
}