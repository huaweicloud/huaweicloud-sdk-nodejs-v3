

export class ListPtrRecordsRequest {
    public marker?: string;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    public tags?: string;
    public status?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListPtrRecordsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPtrRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPtrRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPtrRecordsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: string): ListPtrRecordsRequest {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): ListPtrRecordsRequest {
        this['status'] = status;
        return this;
    }
}