

export class ListGeipPoolsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListGeipPoolsRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListGeipPoolsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListGeipPoolsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public code?: Array<string>;
    private 'access_site'?: Array<string>;
    public isp?: Array<string>;
    private 'ip_version'?: Array<ListGeipPoolsRequestIpVersionEnum> | Array<string>;
    public status?: Array<ListGeipPoolsRequestStatusEnum> | Array<string>;
    public type?: Array<ListGeipPoolsRequestTypeEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGeipPoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGeipPoolsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListGeipPoolsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListGeipPoolsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListGeipPoolsRequestFieldsEnum> | Array<string>): ListGeipPoolsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListGeipPoolsRequestSortKeyEnum> | Array<string>): ListGeipPoolsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListGeipPoolsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListGeipPoolsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListGeipPoolsRequestSortDirEnum> | Array<string>): ListGeipPoolsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListGeipPoolsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListGeipPoolsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListGeipPoolsRequest {
        this['id'] = id;
        return this;
    }
    public withCode(code: Array<string>): ListGeipPoolsRequest {
        this['code'] = code;
        return this;
    }
    public withAccessSite(accessSite: Array<string>): ListGeipPoolsRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withIsp(isp: Array<string>): ListGeipPoolsRequest {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: Array<ListGeipPoolsRequestIpVersionEnum> | Array<string>): ListGeipPoolsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<ListGeipPoolsRequestIpVersionEnum> | Array<string>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<ListGeipPoolsRequestIpVersionEnum> | Array<string> | undefined {
        return this['ip_version'];
    }
    public withStatus(status: Array<ListGeipPoolsRequestStatusEnum> | Array<string>): ListGeipPoolsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: Array<ListGeipPoolsRequestTypeEnum> | Array<string>): ListGeipPoolsRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    ISP = 'isp',
    ACCESS_SITE = 'access_site',
    TYPE = 'type',
    IP_VERSION = 'ip_version',
    EN_NAME = 'en_name',
    CN_NAME = 'cn_name',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    DESCRIPTION = 'description'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsRequestSortKeyEnum {
    ID = 'id',
    NAME = 'name',
    TYPE = 'type',
    ACCESS_SITE = 'access_site',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsRequestIpVersionEnum {
    E_4 = '4',
    E_6 = '6'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsRequestStatusEnum {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    SOLDOUT = 'soldout'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsRequestTypeEnum {
    GEIP = 'GEIP',
    GEIP_SEGMENT = 'GEIP_SEGMENT'
}
