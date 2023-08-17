

export class ListHostedDirectConnectsRequest {
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_dir'?: Array<ListHostedDirectConnectsRequestSortDirEnum> | Array<string>;
    private 'sort_key'?: string;
    private 'hosting_id'?: Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListHostedDirectConnectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListHostedDirectConnectsRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListHostedDirectConnectsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortDir(sortDir: Array<ListHostedDirectConnectsRequestSortDirEnum> | Array<string>): ListHostedDirectConnectsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListHostedDirectConnectsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListHostedDirectConnectsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListHostedDirectConnectsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withHostingId(hostingId: Array<string>): ListHostedDirectConnectsRequest {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: Array<string>  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): Array<string> | undefined {
        return this['hosting_id'];
    }
    public withId(id: Array<string>): ListHostedDirectConnectsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListHostedDirectConnectsRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHostedDirectConnectsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
