

export class ListPublicZonesRequest {
    public type?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public tags?: string;
    public name?: string;
    public status?: string;
    private 'search_mode'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withType(type: string): ListPublicZonesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListPublicZonesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPublicZonesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListPublicZonesRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: string): ListPublicZonesRequest {
        this['tags'] = tags;
        return this;
    }
    public withName(name: string): ListPublicZonesRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListPublicZonesRequest {
        this['status'] = status;
        return this;
    }
    public withSearchMode(searchMode: string): ListPublicZonesRequest {
        this['search_mode'] = searchMode;
        return this;
    }
    public set searchMode(searchMode: string | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode() {
        return this['search_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPublicZonesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}