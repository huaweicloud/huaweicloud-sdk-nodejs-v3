

export class ListWebSiteInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public category?: string;
    public domain?: string;
    public constructor(hostId?: string, category?: string) { 
        this['host_id'] = hostId;
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebSiteInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListWebSiteInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withCategory(category: string): ListWebSiteInfoRequest {
        this['category'] = category;
        return this;
    }
    public withDomain(domain: string): ListWebSiteInfoRequest {
        this['domain'] = domain;
        return this;
    }
}