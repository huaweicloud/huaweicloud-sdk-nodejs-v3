

export class ListIpGroupRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public page?: number;
    public pagesize?: number;
    public name?: string;
    public ip?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListIpGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIpGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListIpGroupRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListIpGroupRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withName(name: string): ListIpGroupRequest {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): ListIpGroupRequest {
        this['ip'] = ip;
        return this;
    }
}