

export class ShowHostedDirectConnectRequest {
    private 'hosted_connect_id'?: string;
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_dir'?: Array<ShowHostedDirectConnectRequestSortDirEnum> | Array<string>;
    private 'sort_key'?: string;
    private 'hosting_id'?: Array<string>;
    public constructor(hostedConnectId?: string) { 
        this['hosted_connect_id'] = hostedConnectId;
    }
    public withHostedConnectId(hostedConnectId: string): ShowHostedDirectConnectRequest {
        this['hosted_connect_id'] = hostedConnectId;
        return this;
    }
    public set hostedConnectId(hostedConnectId: string  | undefined) {
        this['hosted_connect_id'] = hostedConnectId;
    }
    public get hostedConnectId(): string | undefined {
        return this['hosted_connect_id'];
    }
    public withLimit(limit: number): ShowHostedDirectConnectRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowHostedDirectConnectRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ShowHostedDirectConnectRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortDir(sortDir: Array<ShowHostedDirectConnectRequestSortDirEnum> | Array<string>): ShowHostedDirectConnectRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ShowHostedDirectConnectRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ShowHostedDirectConnectRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ShowHostedDirectConnectRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withHostingId(hostingId: Array<string>): ShowHostedDirectConnectRequest {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: Array<string>  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): Array<string> | undefined {
        return this['hosting_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHostedDirectConnectRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
