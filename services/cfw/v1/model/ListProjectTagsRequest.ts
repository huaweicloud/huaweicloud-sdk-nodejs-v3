

export class ListProjectTagsRequest {
    public limit?: number;
    public offset?: number;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(limit?: number, offset?: number, projectId?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['project_id'] = projectId;
    }
    public withLimit(limit: number): ListProjectTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProjectTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): ListProjectTagsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProjectTagsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}