

export class ListGlobalEipsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListGlobalEipsRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListGlobalEipsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListGlobalEipsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    private 'internet_bandwidth_id'?: Array<string>;
    public name?: Array<string>;
    private 'name_like'?: string;
    private 'access_site'?: Array<string>;
    private 'geip_pool_name'?: Array<string>;
    public isp?: Array<string>;
    private 'ip_version'?: Array<ListGlobalEipsRequestIpVersionEnum> | Array<number>;
    private 'ip_address'?: Array<string>;
    private 'ipv6_address'?: Array<string>;
    public freezen?: Array<boolean>;
    public polluted?: Array<boolean>;
    private 'internet_bandwidth_is_null'?: Array<boolean>;
    private 'gcb_bandwidth_is_null'?: Array<boolean>;
    public status?: Array<ListGlobalEipsRequestStatusEnum> | Array<string>;
    private 'associate_instance_info.region'?: Array<string>;
    private 'associate_instance_info.instance_type'?: Array<string>;
    private 'associate_instance_info.public_border_group'?: Array<string>;
    private 'associate_instance_info.instance_site'?: Array<string>;
    private 'associate_instance_info.instance_id'?: Array<string>;
    private 'associate_instance_info.project_id'?: Array<string>;
    private 'associate_instance_info.service_id'?: Array<string>;
    private 'associate_instance_info.service_type'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalEipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalEipsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListGlobalEipsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListGlobalEipsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListGlobalEipsRequestFieldsEnum> | Array<string>): ListGlobalEipsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListGlobalEipsRequestSortKeyEnum> | Array<string>): ListGlobalEipsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListGlobalEipsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListGlobalEipsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListGlobalEipsRequestSortDirEnum> | Array<string>): ListGlobalEipsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListGlobalEipsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListGlobalEipsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListGlobalEipsRequest {
        this['id'] = id;
        return this;
    }
    public withInternetBandwidthId(internetBandwidthId: Array<string>): ListGlobalEipsRequest {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: Array<string>  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): Array<string> | undefined {
        return this['internet_bandwidth_id'];
    }
    public withName(name: Array<string>): ListGlobalEipsRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): ListGlobalEipsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withAccessSite(accessSite: Array<string>): ListGlobalEipsRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withGeipPoolName(geipPoolName: Array<string>): ListGlobalEipsRequest {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: Array<string>  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): Array<string> | undefined {
        return this['geip_pool_name'];
    }
    public withIsp(isp: Array<string>): ListGlobalEipsRequest {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: Array<ListGlobalEipsRequestIpVersionEnum> | Array<number>): ListGlobalEipsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<ListGlobalEipsRequestIpVersionEnum> | Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<ListGlobalEipsRequestIpVersionEnum> | Array<number> | undefined {
        return this['ip_version'];
    }
    public withIpAddress(ipAddress: Array<string>): ListGlobalEipsRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: Array<string>  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): Array<string> | undefined {
        return this['ip_address'];
    }
    public withIpv6Address(ipv6Address: Array<string>): ListGlobalEipsRequest {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: Array<string>  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): Array<string> | undefined {
        return this['ipv6_address'];
    }
    public withFreezen(freezen: Array<boolean>): ListGlobalEipsRequest {
        this['freezen'] = freezen;
        return this;
    }
    public withPolluted(polluted: Array<boolean>): ListGlobalEipsRequest {
        this['polluted'] = polluted;
        return this;
    }
    public withInternetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>): ListGlobalEipsRequest {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
        return this;
    }
    public set internetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>  | undefined) {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
    }
    public get internetBandwidthIsNull(): Array<boolean> | undefined {
        return this['internet_bandwidth_is_null'];
    }
    public withGcbBandwidthIsNull(gcbBandwidthIsNull: Array<boolean>): ListGlobalEipsRequest {
        this['gcb_bandwidth_is_null'] = gcbBandwidthIsNull;
        return this;
    }
    public set gcbBandwidthIsNull(gcbBandwidthIsNull: Array<boolean>  | undefined) {
        this['gcb_bandwidth_is_null'] = gcbBandwidthIsNull;
    }
    public get gcbBandwidthIsNull(): Array<boolean> | undefined {
        return this['gcb_bandwidth_is_null'];
    }
    public withStatus(status: Array<ListGlobalEipsRequestStatusEnum> | Array<string>): ListGlobalEipsRequest {
        this['status'] = status;
        return this;
    }
    public withAssociateInstanceInfoRegion(associateInstanceInfoRegion: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.region'] = associateInstanceInfoRegion;
        return this;
    }
    public set associateInstanceInfoRegion(associateInstanceInfoRegion: Array<string>  | undefined) {
        this['associate_instance_info.region'] = associateInstanceInfoRegion;
    }
    public get associateInstanceInfoRegion(): Array<string> | undefined {
        return this['associate_instance_info.region'];
    }
    public withAssociateInstanceInfoInstanceType(associateInstanceInfoInstanceType: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.instance_type'] = associateInstanceInfoInstanceType;
        return this;
    }
    public set associateInstanceInfoInstanceType(associateInstanceInfoInstanceType: Array<string>  | undefined) {
        this['associate_instance_info.instance_type'] = associateInstanceInfoInstanceType;
    }
    public get associateInstanceInfoInstanceType(): Array<string> | undefined {
        return this['associate_instance_info.instance_type'];
    }
    public withAssociateInstanceInfoPublicBorderGroup(associateInstanceInfoPublicBorderGroup: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.public_border_group'] = associateInstanceInfoPublicBorderGroup;
        return this;
    }
    public set associateInstanceInfoPublicBorderGroup(associateInstanceInfoPublicBorderGroup: Array<string>  | undefined) {
        this['associate_instance_info.public_border_group'] = associateInstanceInfoPublicBorderGroup;
    }
    public get associateInstanceInfoPublicBorderGroup(): Array<string> | undefined {
        return this['associate_instance_info.public_border_group'];
    }
    public withAssociateInstanceInfoInstanceSite(associateInstanceInfoInstanceSite: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.instance_site'] = associateInstanceInfoInstanceSite;
        return this;
    }
    public set associateInstanceInfoInstanceSite(associateInstanceInfoInstanceSite: Array<string>  | undefined) {
        this['associate_instance_info.instance_site'] = associateInstanceInfoInstanceSite;
    }
    public get associateInstanceInfoInstanceSite(): Array<string> | undefined {
        return this['associate_instance_info.instance_site'];
    }
    public withAssociateInstanceInfoInstanceId(associateInstanceInfoInstanceId: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.instance_id'] = associateInstanceInfoInstanceId;
        return this;
    }
    public set associateInstanceInfoInstanceId(associateInstanceInfoInstanceId: Array<string>  | undefined) {
        this['associate_instance_info.instance_id'] = associateInstanceInfoInstanceId;
    }
    public get associateInstanceInfoInstanceId(): Array<string> | undefined {
        return this['associate_instance_info.instance_id'];
    }
    public withAssociateInstanceInfoProjectId(associateInstanceInfoProjectId: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.project_id'] = associateInstanceInfoProjectId;
        return this;
    }
    public set associateInstanceInfoProjectId(associateInstanceInfoProjectId: Array<string>  | undefined) {
        this['associate_instance_info.project_id'] = associateInstanceInfoProjectId;
    }
    public get associateInstanceInfoProjectId(): Array<string> | undefined {
        return this['associate_instance_info.project_id'];
    }
    public withAssociateInstanceInfoServiceId(associateInstanceInfoServiceId: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.service_id'] = associateInstanceInfoServiceId;
        return this;
    }
    public set associateInstanceInfoServiceId(associateInstanceInfoServiceId: Array<string>  | undefined) {
        this['associate_instance_info.service_id'] = associateInstanceInfoServiceId;
    }
    public get associateInstanceInfoServiceId(): Array<string> | undefined {
        return this['associate_instance_info.service_id'];
    }
    public withAssociateInstanceInfoServiceType(associateInstanceInfoServiceType: Array<string>): ListGlobalEipsRequest {
        this['associate_instance_info.service_type'] = associateInstanceInfoServiceType;
        return this;
    }
    public set associateInstanceInfoServiceType(associateInstanceInfoServiceType: Array<string>  | undefined) {
        this['associate_instance_info.service_type'] = associateInstanceInfoServiceType;
    }
    public get associateInstanceInfoServiceType(): Array<string> | undefined {
        return this['associate_instance_info.service_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListGlobalEipsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): ListGlobalEipsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipsRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    DESCRIPTION = 'description',
    DOMAIN_ID = 'domain_id',
    ACCESS_SITE = 'access_site',
    GEIP_POOL_NAME = 'geip_pool_name',
    ISP = 'isp',
    IP_VERSION = 'ip_version',
    IP_ADDRESS = 'ip_address',
    IPV6_ADDRESS = 'ipv6_address',
    FREEZEN = 'freezen',
    FREEZEN_INFO = 'freezen_info',
    POLLUTED = 'polluted',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    INTERNET_BANDWIDTH_INFO = 'internet_bandwidth_info',
    GLOBAL_CONNECTION_BANDWIDTH_INFO = 'global_connection_bandwidth_info',
    ASSOCIATE_INSTANCE_INFO = 'associate_instance_info',
    IS_PRE_PAID = 'is_pre_paid',
    TAGS = 'tags',
    SYS_TAGS = 'sys_tags',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipsRequestSortKeyEnum {
    ID = 'id',
    IP_ADDRESS = 'ip_address',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipsRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipsRequestStatusEnum {
    IDLE = 'idle',
    INUSE = 'inuse',
    PENDING_CREATE = 'pending_create',
    PENDING_UPDATE = 'pending_update'
}
