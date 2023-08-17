

export class ListDirectConnectsRequest {
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListDirectConnectsRequestSortDirEnum> | Array<string>;
    private 'hosting_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListDirectConnectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDirectConnectsRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListDirectConnectsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: string): ListDirectConnectsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListDirectConnectsRequestSortDirEnum> | Array<string>): ListDirectConnectsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListDirectConnectsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListDirectConnectsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withHostingId(hostingId: Array<string>): ListDirectConnectsRequest {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: Array<string>  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): Array<string> | undefined {
        return this['hosting_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListDirectConnectsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListDirectConnectsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListDirectConnectsRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDirectConnectsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
