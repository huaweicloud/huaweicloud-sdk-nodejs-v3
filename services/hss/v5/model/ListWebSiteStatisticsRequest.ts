

export class ListWebSiteStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public domain?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebSiteStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebSiteStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebSiteStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDomain(domain: string): ListWebSiteStatisticsRequest {
        this['domain'] = domain;
        return this;
    }
}