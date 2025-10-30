

export class ListAppStatisticsRequest {
    private 'app_name'?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withAppName(appName: string): ListAppStatisticsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListAppStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListAppStatisticsRequest {
        this['category'] = category;
        return this;
    }
}