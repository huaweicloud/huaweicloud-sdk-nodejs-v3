

export class ListProcessStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    public path?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProcessStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListProcessStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProcessStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListProcessStatisticsRequest {
        this['category'] = category;
        return this;
    }
    public withPath(path: string): ListProcessStatisticsRequest {
        this['path'] = path;
        return this;
    }
}