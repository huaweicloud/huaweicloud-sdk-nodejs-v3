

export class ListPtrsRequest {
    public marker?: string;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    public tags?: string;
    public status?: string;
    private 'resource_type'?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListPtrsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPtrsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPtrsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPtrsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: string): ListPtrsRequest {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): ListPtrsRequest {
        this['status'] = status;
        return this;
    }
    public withResourceType(resourceType: string): ListPtrsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}