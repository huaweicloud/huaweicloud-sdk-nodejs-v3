

export class ListGlobalEipSegmentsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListGlobalEipSegmentsRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListGlobalEipSegmentsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListGlobalEipSegmentsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    private 'internet_bandwidth_id'?: Array<string>;
    public name?: Array<string>;
    private 'name_like'?: string;
    private 'access_site'?: Array<string>;
    private 'geip_pool_name'?: Array<string>;
    public isp?: Array<string>;
    private 'ip_version'?: Array<ListGlobalEipSegmentsRequestIpVersionEnum> | Array<number>;
    public cidr?: Array<string>;
    private 'cidr_v6'?: Array<string>;
    public freezen?: Array<boolean>;
    private 'internet_bandwidth_is_null'?: Array<boolean>;
    public status?: Array<ListGlobalEipSegmentsRequestStatusEnum> | Array<string>;
    private 'associate_instance.region'?: Array<string>;
    private 'associate_instance.instance_type'?: Array<string>;
    private 'associate_instance.public_border_group'?: Array<string>;
    private 'associate_instance.instance_site'?: Array<string>;
    private 'associate_instance.instance_id'?: Array<string>;
    private 'associate_instance.project_id'?: Array<string>;
    private 'associate_instance.service_id'?: Array<string>;
    private 'associate_instance.service_type'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalEipSegmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalEipSegmentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListGlobalEipSegmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListGlobalEipSegmentsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListGlobalEipSegmentsRequestFieldsEnum> | Array<string>): ListGlobalEipSegmentsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListGlobalEipSegmentsRequestSortKeyEnum> | Array<string>): ListGlobalEipSegmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListGlobalEipSegmentsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListGlobalEipSegmentsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListGlobalEipSegmentsRequestSortDirEnum> | Array<string>): ListGlobalEipSegmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListGlobalEipSegmentsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListGlobalEipSegmentsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListGlobalEipSegmentsRequest {
        this['id'] = id;
        return this;
    }
    public withInternetBandwidthId(internetBandwidthId: Array<string>): ListGlobalEipSegmentsRequest {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: Array<string>  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): Array<string> | undefined {
        return this['internet_bandwidth_id'];
    }
    public withName(name: Array<string>): ListGlobalEipSegmentsRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): ListGlobalEipSegmentsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withAccessSite(accessSite: Array<string>): ListGlobalEipSegmentsRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withGeipPoolName(geipPoolName: Array<string>): ListGlobalEipSegmentsRequest {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: Array<string>  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): Array<string> | undefined {
        return this['geip_pool_name'];
    }
    public withIsp(isp: Array<string>): ListGlobalEipSegmentsRequest {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: Array<ListGlobalEipSegmentsRequestIpVersionEnum> | Array<number>): ListGlobalEipSegmentsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<ListGlobalEipSegmentsRequestIpVersionEnum> | Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<ListGlobalEipSegmentsRequestIpVersionEnum> | Array<number> | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: Array<string>): ListGlobalEipSegmentsRequest {
        this['cidr'] = cidr;
        return this;
    }
    public withCidrV6(cidrV6: Array<string>): ListGlobalEipSegmentsRequest {
        this['cidr_v6'] = cidrV6;
        return this;
    }
    public set cidrV6(cidrV6: Array<string>  | undefined) {
        this['cidr_v6'] = cidrV6;
    }
    public get cidrV6(): Array<string> | undefined {
        return this['cidr_v6'];
    }
    public withFreezen(freezen: Array<boolean>): ListGlobalEipSegmentsRequest {
        this['freezen'] = freezen;
        return this;
    }
    public withInternetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>): ListGlobalEipSegmentsRequest {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
        return this;
    }
    public set internetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>  | undefined) {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
    }
    public get internetBandwidthIsNull(): Array<boolean> | undefined {
        return this['internet_bandwidth_is_null'];
    }
    public withStatus(status: Array<ListGlobalEipSegmentsRequestStatusEnum> | Array<string>): ListGlobalEipSegmentsRequest {
        this['status'] = status;
        return this;
    }
    public withAssociateInstanceRegion(associateInstanceRegion: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.region'] = associateInstanceRegion;
        return this;
    }
    public set associateInstanceRegion(associateInstanceRegion: Array<string>  | undefined) {
        this['associate_instance.region'] = associateInstanceRegion;
    }
    public get associateInstanceRegion(): Array<string> | undefined {
        return this['associate_instance.region'];
    }
    public withAssociateInstanceInstanceType(associateInstanceInstanceType: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.instance_type'] = associateInstanceInstanceType;
        return this;
    }
    public set associateInstanceInstanceType(associateInstanceInstanceType: Array<string>  | undefined) {
        this['associate_instance.instance_type'] = associateInstanceInstanceType;
    }
    public get associateInstanceInstanceType(): Array<string> | undefined {
        return this['associate_instance.instance_type'];
    }
    public withAssociateInstancePublicBorderGroup(associateInstancePublicBorderGroup: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.public_border_group'] = associateInstancePublicBorderGroup;
        return this;
    }
    public set associateInstancePublicBorderGroup(associateInstancePublicBorderGroup: Array<string>  | undefined) {
        this['associate_instance.public_border_group'] = associateInstancePublicBorderGroup;
    }
    public get associateInstancePublicBorderGroup(): Array<string> | undefined {
        return this['associate_instance.public_border_group'];
    }
    public withAssociateInstanceInstanceSite(associateInstanceInstanceSite: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.instance_site'] = associateInstanceInstanceSite;
        return this;
    }
    public set associateInstanceInstanceSite(associateInstanceInstanceSite: Array<string>  | undefined) {
        this['associate_instance.instance_site'] = associateInstanceInstanceSite;
    }
    public get associateInstanceInstanceSite(): Array<string> | undefined {
        return this['associate_instance.instance_site'];
    }
    public withAssociateInstanceInstanceId(associateInstanceInstanceId: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.instance_id'] = associateInstanceInstanceId;
        return this;
    }
    public set associateInstanceInstanceId(associateInstanceInstanceId: Array<string>  | undefined) {
        this['associate_instance.instance_id'] = associateInstanceInstanceId;
    }
    public get associateInstanceInstanceId(): Array<string> | undefined {
        return this['associate_instance.instance_id'];
    }
    public withAssociateInstanceProjectId(associateInstanceProjectId: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.project_id'] = associateInstanceProjectId;
        return this;
    }
    public set associateInstanceProjectId(associateInstanceProjectId: Array<string>  | undefined) {
        this['associate_instance.project_id'] = associateInstanceProjectId;
    }
    public get associateInstanceProjectId(): Array<string> | undefined {
        return this['associate_instance.project_id'];
    }
    public withAssociateInstanceServiceId(associateInstanceServiceId: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.service_id'] = associateInstanceServiceId;
        return this;
    }
    public set associateInstanceServiceId(associateInstanceServiceId: Array<string>  | undefined) {
        this['associate_instance.service_id'] = associateInstanceServiceId;
    }
    public get associateInstanceServiceId(): Array<string> | undefined {
        return this['associate_instance.service_id'];
    }
    public withAssociateInstanceServiceType(associateInstanceServiceType: Array<string>): ListGlobalEipSegmentsRequest {
        this['associate_instance.service_type'] = associateInstanceServiceType;
        return this;
    }
    public set associateInstanceServiceType(associateInstanceServiceType: Array<string>  | undefined) {
        this['associate_instance.service_type'] = associateInstanceServiceType;
    }
    public get associateInstanceServiceType(): Array<string> | undefined {
        return this['associate_instance.service_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListGlobalEipSegmentsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): ListGlobalEipSegmentsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipSegmentsRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    DESCRIPTION = 'description',
    DOMAIN_ID = 'domain_id',
    ACCESS_SITE = 'access_site',
    GEIP_POOL_NAME = 'geip_pool_name',
    ISP = 'isp',
    IP_VERSION = 'ip_version',
    CIDR = 'cidr',
    CIDR_V6 = 'cidr_v6',
    FREEZEN = 'freezen',
    FREEZEN_INFO = 'freezen_info',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    INTERNET_BANDWIDTH = 'internet_bandwidth',
    ASSOCIATE_INSTANCE = 'associate_instance',
    IS_PRE_PAID = 'is_pre_paid',
    TAGS = 'tags',
    SYS_TAGS = 'sys_tags',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipSegmentsRequestSortKeyEnum {
    ID = 'id',
    CIDR = 'cidr',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipSegmentsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipSegmentsRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipSegmentsRequestStatusEnum {
    IDLE = 'idle',
    INUSE = 'inuse'
}
