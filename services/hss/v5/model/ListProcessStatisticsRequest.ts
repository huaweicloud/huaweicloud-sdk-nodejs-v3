

export class ListProcessStatisticsRequest {
    public path?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withPath(path: string): ListProcessStatisticsRequest {
        this['path'] = path;
        return this;
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
}