

export class ListAutoLaunchStatisticsRequest {
    public name?: string;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withName(name: string): ListAutoLaunchStatisticsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListAutoLaunchStatisticsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAutoLaunchStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListAutoLaunchStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAutoLaunchStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListAutoLaunchStatisticsRequest {
        this['category'] = category;
        return this;
    }
}