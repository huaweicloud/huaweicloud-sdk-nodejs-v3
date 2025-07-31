

export class ListContainerImagesRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public keyword?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListContainerImagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListContainerImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainerImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withKeyword(keyword: string): ListContainerImagesRequest {
        this['keyword'] = keyword;
        return this;
    }
}