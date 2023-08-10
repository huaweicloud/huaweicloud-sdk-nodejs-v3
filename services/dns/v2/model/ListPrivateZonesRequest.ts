

export class ListPrivateZonesRequest {
    public type?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public tags?: string;
    public name?: string;
    public status?: string;
    private 'search_mode'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): ListPrivateZonesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListPrivateZonesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPrivateZonesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListPrivateZonesRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: string): ListPrivateZonesRequest {
        this['tags'] = tags;
        return this;
    }
    public withName(name: string): ListPrivateZonesRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListPrivateZonesRequest {
        this['status'] = status;
        return this;
    }
    public withSearchMode(searchMode: string): ListPrivateZonesRequest {
        this['search_mode'] = searchMode;
        return this;
    }
    public set searchMode(searchMode: string  | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode(): string | undefined {
        return this['search_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPrivateZonesRequest {
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