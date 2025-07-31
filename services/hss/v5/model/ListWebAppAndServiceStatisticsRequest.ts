

export class ListWebAppAndServiceStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public category?: string;
    public catalogue?: string;
    public constructor(name?: string, category?: string, catalogue?: string) { 
        this['name'] = name;
        this['category'] = category;
        this['catalogue'] = catalogue;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebAppAndServiceStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebAppAndServiceStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebAppAndServiceStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListWebAppAndServiceStatisticsRequest {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ListWebAppAndServiceStatisticsRequest {
        this['category'] = category;
        return this;
    }
    public withCatalogue(catalogue: string): ListWebAppAndServiceStatisticsRequest {
        this['catalogue'] = catalogue;
        return this;
    }
}