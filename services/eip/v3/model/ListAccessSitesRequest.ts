

export class ListAccessSitesRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListAccessSitesRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListAccessSitesRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListAccessSitesRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public code?: Array<string>;
    private 'proxy_region'?: Array<string>;
    private 'iec_az_code'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListAccessSitesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAccessSitesRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListAccessSitesRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListAccessSitesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListAccessSitesRequestFieldsEnum> | Array<string>): ListAccessSitesRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListAccessSitesRequestSortKeyEnum> | Array<string>): ListAccessSitesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListAccessSitesRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListAccessSitesRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListAccessSitesRequestSortDirEnum> | Array<string>): ListAccessSitesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListAccessSitesRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListAccessSitesRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListAccessSitesRequest {
        this['id'] = id;
        return this;
    }
    public withCode(code: Array<string>): ListAccessSitesRequest {
        this['code'] = code;
        return this;
    }
    public withProxyRegion(proxyRegion: Array<string>): ListAccessSitesRequest {
        this['proxy_region'] = proxyRegion;
        return this;
    }
    public set proxyRegion(proxyRegion: Array<string>  | undefined) {
        this['proxy_region'] = proxyRegion;
    }
    public get proxyRegion(): Array<string> | undefined {
        return this['proxy_region'];
    }
    public withIecAzCode(iecAzCode: Array<string>): ListAccessSitesRequest {
        this['iec_az_code'] = iecAzCode;
        return this;
    }
    public set iecAzCode(iecAzCode: Array<string>  | undefined) {
        this['iec_az_code'] = iecAzCode;
    }
    public get iecAzCode(): Array<string> | undefined {
        return this['iec_az_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAccessSitesRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    PROXY_REGION = 'proxy_region',
    EN_NAME = 'en_name',
    CN_NAME = 'cn_name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAccessSitesRequestSortKeyEnum {
    ID = 'id',
    NAME = 'name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAccessSitesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
