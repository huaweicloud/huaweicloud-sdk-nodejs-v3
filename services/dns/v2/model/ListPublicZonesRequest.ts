

export class ListPublicZonesRequest {
    public type?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public tags?: string;
    public name?: string;
    public id?: string;
    public status?: string;
    private 'search_mode'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'enterprise_project_id'?: string;
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
    public withId(id: string): ListPublicZonesRequest {
        this['id'] = id;
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
    public set searchMode(searchMode: string  | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode(): string | undefined {
        return this['search_mode'];
    }
    public withSortKey(sortKey: string): ListPublicZonesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPublicZonesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPublicZonesRequest {
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