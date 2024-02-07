

export class CountGlobalEipsRequest {
    public id?: Array<string>;
    private 'internet_bandwidth_id'?: Array<string>;
    public name?: Array<string>;
    private 'name_like'?: string;
    private 'access_site'?: Array<string>;
    private 'geip_pool_name'?: Array<string>;
    public isp?: Array<string>;
    private 'ip_version'?: Array<CountGlobalEipsRequestIpVersionEnum> | Array<number>;
    private 'ip_address'?: Array<string>;
    private 'ipv6_address'?: Array<string>;
    public freezen?: Array<boolean>;
    public polluted?: Array<boolean>;
    private 'internet_bandwidth_is_null'?: Array<boolean>;
    private 'gcb_bandwidth_is_null'?: Array<boolean>;
    public status?: Array<CountGlobalEipsRequestStatusEnum> | Array<string>;
    private 'associate_instance_info.region'?: Array<string>;
    private 'associate_instance_info.public_border_group'?: Array<string>;
    private 'associate_instance_info.instance_site'?: Array<string>;
    private 'associate_instance_info.instance_type'?: Array<string>;
    private 'associate_instance_info.instance_id'?: Array<string>;
    private 'associate_instance_info.project_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withId(id: Array<string>): CountGlobalEipsRequest {
        this['id'] = id;
        return this;
    }
    public withInternetBandwidthId(internetBandwidthId: Array<string>): CountGlobalEipsRequest {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: Array<string>  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): Array<string> | undefined {
        return this['internet_bandwidth_id'];
    }
    public withName(name: Array<string>): CountGlobalEipsRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): CountGlobalEipsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withAccessSite(accessSite: Array<string>): CountGlobalEipsRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withGeipPoolName(geipPoolName: Array<string>): CountGlobalEipsRequest {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: Array<string>  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): Array<string> | undefined {
        return this['geip_pool_name'];
    }
    public withIsp(isp: Array<string>): CountGlobalEipsRequest {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: Array<CountGlobalEipsRequestIpVersionEnum> | Array<number>): CountGlobalEipsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<CountGlobalEipsRequestIpVersionEnum> | Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<CountGlobalEipsRequestIpVersionEnum> | Array<number> | undefined {
        return this['ip_version'];
    }
    public withIpAddress(ipAddress: Array<string>): CountGlobalEipsRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: Array<string>  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): Array<string> | undefined {
        return this['ip_address'];
    }
    public withIpv6Address(ipv6Address: Array<string>): CountGlobalEipsRequest {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: Array<string>  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): Array<string> | undefined {
        return this['ipv6_address'];
    }
    public withFreezen(freezen: Array<boolean>): CountGlobalEipsRequest {
        this['freezen'] = freezen;
        return this;
    }
    public withPolluted(polluted: Array<boolean>): CountGlobalEipsRequest {
        this['polluted'] = polluted;
        return this;
    }
    public withInternetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>): CountGlobalEipsRequest {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
        return this;
    }
    public set internetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>  | undefined) {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
    }
    public get internetBandwidthIsNull(): Array<boolean> | undefined {
        return this['internet_bandwidth_is_null'];
    }
    public withGcbBandwidthIsNull(gcbBandwidthIsNull: Array<boolean>): CountGlobalEipsRequest {
        this['gcb_bandwidth_is_null'] = gcbBandwidthIsNull;
        return this;
    }
    public set gcbBandwidthIsNull(gcbBandwidthIsNull: Array<boolean>  | undefined) {
        this['gcb_bandwidth_is_null'] = gcbBandwidthIsNull;
    }
    public get gcbBandwidthIsNull(): Array<boolean> | undefined {
        return this['gcb_bandwidth_is_null'];
    }
    public withStatus(status: Array<CountGlobalEipsRequestStatusEnum> | Array<string>): CountGlobalEipsRequest {
        this['status'] = status;
        return this;
    }
    public withAssociateInstanceInfoRegion(associateInstanceInfoRegion: Array<string>): CountGlobalEipsRequest {
        this['associate_instance_info.region'] = associateInstanceInfoRegion;
        return this;
    }
    public set associateInstanceInfoRegion(associateInstanceInfoRegion: Array<string>  | undefined) {
        this['associate_instance_info.region'] = associateInstanceInfoRegion;
    }
    public get associateInstanceInfoRegion(): Array<string> | undefined {
        return this['associate_instance_info.region'];
    }
    public withAssociateInstanceInfoPublicBorderGroup(associateInstanceInfoPublicBorderGroup: Array<string>): CountGlobalEipsRequest {
        this['associate_instance_info.public_border_group'] = associateInstanceInfoPublicBorderGroup;
        return this;
    }
    public set associateInstanceInfoPublicBorderGroup(associateInstanceInfoPublicBorderGroup: Array<string>  | undefined) {
        this['associate_instance_info.public_border_group'] = associateInstanceInfoPublicBorderGroup;
    }
    public get associateInstanceInfoPublicBorderGroup(): Array<string> | undefined {
        return this['associate_instance_info.public_border_group'];
    }
    public withAssociateInstanceInfoInstanceSite(associateInstanceInfoInstanceSite: Array<string>): CountGlobalEipsRequest {
        this['associate_instance_info.instance_site'] = associateInstanceInfoInstanceSite;
        return this;
    }
    public set associateInstanceInfoInstanceSite(associateInstanceInfoInstanceSite: Array<string>  | undefined) {
        this['associate_instance_info.instance_site'] = associateInstanceInfoInstanceSite;
    }
    public get associateInstanceInfoInstanceSite(): Array<string> | undefined {
        return this['associate_instance_info.instance_site'];
    }
    public withAssociateInstanceInfoInstanceType(associateInstanceInfoInstanceType: Array<string>): CountGlobalEipsRequest {
        this['associate_instance_info.instance_type'] = associateInstanceInfoInstanceType;
        return this;
    }
    public set associateInstanceInfoInstanceType(associateInstanceInfoInstanceType: Array<string>  | undefined) {
        this['associate_instance_info.instance_type'] = associateInstanceInfoInstanceType;
    }
    public get associateInstanceInfoInstanceType(): Array<string> | undefined {
        return this['associate_instance_info.instance_type'];
    }
    public withAssociateInstanceInfoInstanceId(associateInstanceInfoInstanceId: Array<string>): CountGlobalEipsRequest {
        this['associate_instance_info.instance_id'] = associateInstanceInfoInstanceId;
        return this;
    }
    public set associateInstanceInfoInstanceId(associateInstanceInfoInstanceId: Array<string>  | undefined) {
        this['associate_instance_info.instance_id'] = associateInstanceInfoInstanceId;
    }
    public get associateInstanceInfoInstanceId(): Array<string> | undefined {
        return this['associate_instance_info.instance_id'];
    }
    public withAssociateInstanceInfoProjectId(associateInstanceInfoProjectId: Array<string>): CountGlobalEipsRequest {
        this['associate_instance_info.project_id'] = associateInstanceInfoProjectId;
        return this;
    }
    public set associateInstanceInfoProjectId(associateInstanceInfoProjectId: Array<string>  | undefined) {
        this['associate_instance_info.project_id'] = associateInstanceInfoProjectId;
    }
    public get associateInstanceInfoProjectId(): Array<string> | undefined {
        return this['associate_instance_info.project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): CountGlobalEipsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): CountGlobalEipsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountGlobalEipsRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum CountGlobalEipsRequestStatusEnum {
    IDLE = 'idle',
    INUSE = 'inuse',
    PENDING_CREATE = 'pending_create',
    PENDING_UPDATE = 'pending_update'
}
