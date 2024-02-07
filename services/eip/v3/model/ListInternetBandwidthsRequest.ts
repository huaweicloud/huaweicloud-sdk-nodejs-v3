

export class ListInternetBandwidthsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListInternetBandwidthsRequestFieldsEnum> | Array<string>;
    private 'ext-fields'?: Array<ListInternetBandwidthsRequestExtFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListInternetBandwidthsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListInternetBandwidthsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public size?: Array<number>;
    public name?: Array<string>;
    private 'name_like'?: string;
    private 'access_site'?: Array<string>;
    public status?: Array<ListInternetBandwidthsRequestStatusEnum> | Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public tags?: Array<string>;
    public type?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListInternetBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInternetBandwidthsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListInternetBandwidthsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListInternetBandwidthsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListInternetBandwidthsRequestFieldsEnum> | Array<string>): ListInternetBandwidthsRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<ListInternetBandwidthsRequestExtFieldsEnum> | Array<string>): ListInternetBandwidthsRequest {
        this['ext-fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<ListInternetBandwidthsRequestExtFieldsEnum> | Array<string>  | undefined) {
        this['ext-fields'] = extFields;
    }
    public get extFields(): Array<ListInternetBandwidthsRequestExtFieldsEnum> | Array<string> | undefined {
        return this['ext-fields'];
    }
    public withSortKey(sortKey: Array<ListInternetBandwidthsRequestSortKeyEnum> | Array<string>): ListInternetBandwidthsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListInternetBandwidthsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListInternetBandwidthsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListInternetBandwidthsRequestSortDirEnum> | Array<string>): ListInternetBandwidthsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListInternetBandwidthsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListInternetBandwidthsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListInternetBandwidthsRequest {
        this['id'] = id;
        return this;
    }
    public withSize(size: Array<number>): ListInternetBandwidthsRequest {
        this['size'] = size;
        return this;
    }
    public withName(name: Array<string>): ListInternetBandwidthsRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): ListInternetBandwidthsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withAccessSite(accessSite: Array<string>): ListInternetBandwidthsRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withStatus(status: Array<ListInternetBandwidthsRequestStatusEnum> | Array<string>): ListInternetBandwidthsRequest {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListInternetBandwidthsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): ListInternetBandwidthsRequest {
        this['tags'] = tags;
        return this;
    }
    public withType(type: Array<string>): ListInternetBandwidthsRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthsRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    ISP = 'isp',
    INGRESS_SIZE = 'ingress_size',
    ACCESS_SITE = 'access_site',
    SIZE = 'size',
    DESCRIPTION = 'description',
    CHARGE_MODE = 'charge_mode',
    RATIO_95PEAK = 'ratio_95peak',
    FREEZEN_INFO = 'freezen_info',
    DOMAIN_ID = 'domain_id',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    IS_PRE_PAID = 'is_pre_paid',
    TYPE = 'type',
    TAGS = 'tags',
    SYS_TAGS = 'sys_tags',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthsRequestExtFieldsEnum {
    GEIP_COUNT = 'geip_count',
    GEIP_SEGMENT_COUNT = 'geip_segment_count'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthsRequestSortKeyEnum {
    ID = 'id',
    SIZE = 'size',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthsRequestStatusEnum {
    FREEZED = 'freezed',
    NORMAL = 'normal'
}
