

export class ListPrivateZonesRequest {
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
    private 'router_id'?: string;
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
    public withId(id: string): ListPrivateZonesRequest {
        this['id'] = id;
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
    public withSortKey(sortKey: string): ListPrivateZonesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPrivateZonesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
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
    public withRouterId(routerId: string): ListPrivateZonesRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
}