

export class ListUserStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'user_name'?: string;
    public category?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListUserStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListUserStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListUserStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withUserName(userName: string): ListUserStatisticsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCategory(category: string): ListUserStatisticsRequest {
        this['category'] = category;
        return this;
    }
}