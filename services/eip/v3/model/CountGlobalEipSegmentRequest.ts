

export class CountGlobalEipSegmentRequest {
    public fields?: Array<CountGlobalEipSegmentRequestFieldsEnum> | Array<string>;
    public id?: Array<string>;
    private 'internet_bandwidth_id'?: Array<string>;
    public name?: Array<string>;
    private 'name_like'?: string;
    private 'access_site'?: Array<string>;
    private 'geip_pool_name'?: Array<string>;
    public isp?: Array<string>;
    private 'ip_version'?: Array<CountGlobalEipSegmentRequestIpVersionEnum> | Array<number>;
    public cidr?: Array<string>;
    private 'cidr_v6'?: Array<string>;
    public freezen?: Array<boolean>;
    private 'internet_bandwidth_is_null'?: Array<boolean>;
    public status?: Array<CountGlobalEipSegmentRequestStatusEnum> | Array<string>;
    private 'associate_instance.region'?: Array<string>;
    private 'associate_instance.public_border_group'?: Array<string>;
    private 'associate_instance.instance_site'?: Array<string>;
    private 'associate_instance.instance_type'?: Array<string>;
    private 'associate_instance.instance_id'?: Array<string>;
    private 'associate_instance.project_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withFields(fields: Array<CountGlobalEipSegmentRequestFieldsEnum> | Array<string>): CountGlobalEipSegmentRequest {
        this['fields'] = fields;
        return this;
    }
    public withId(id: Array<string>): CountGlobalEipSegmentRequest {
        this['id'] = id;
        return this;
    }
    public withInternetBandwidthId(internetBandwidthId: Array<string>): CountGlobalEipSegmentRequest {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: Array<string>  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): Array<string> | undefined {
        return this['internet_bandwidth_id'];
    }
    public withName(name: Array<string>): CountGlobalEipSegmentRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): CountGlobalEipSegmentRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withAccessSite(accessSite: Array<string>): CountGlobalEipSegmentRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withGeipPoolName(geipPoolName: Array<string>): CountGlobalEipSegmentRequest {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: Array<string>  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): Array<string> | undefined {
        return this['geip_pool_name'];
    }
    public withIsp(isp: Array<string>): CountGlobalEipSegmentRequest {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: Array<CountGlobalEipSegmentRequestIpVersionEnum> | Array<number>): CountGlobalEipSegmentRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<CountGlobalEipSegmentRequestIpVersionEnum> | Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<CountGlobalEipSegmentRequestIpVersionEnum> | Array<number> | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: Array<string>): CountGlobalEipSegmentRequest {
        this['cidr'] = cidr;
        return this;
    }
    public withCidrV6(cidrV6: Array<string>): CountGlobalEipSegmentRequest {
        this['cidr_v6'] = cidrV6;
        return this;
    }
    public set cidrV6(cidrV6: Array<string>  | undefined) {
        this['cidr_v6'] = cidrV6;
    }
    public get cidrV6(): Array<string> | undefined {
        return this['cidr_v6'];
    }
    public withFreezen(freezen: Array<boolean>): CountGlobalEipSegmentRequest {
        this['freezen'] = freezen;
        return this;
    }
    public withInternetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>): CountGlobalEipSegmentRequest {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
        return this;
    }
    public set internetBandwidthIsNull(internetBandwidthIsNull: Array<boolean>  | undefined) {
        this['internet_bandwidth_is_null'] = internetBandwidthIsNull;
    }
    public get internetBandwidthIsNull(): Array<boolean> | undefined {
        return this['internet_bandwidth_is_null'];
    }
    public withStatus(status: Array<CountGlobalEipSegmentRequestStatusEnum> | Array<string>): CountGlobalEipSegmentRequest {
        this['status'] = status;
        return this;
    }
    public withAssociateInstanceRegion(associateInstanceRegion: Array<string>): CountGlobalEipSegmentRequest {
        this['associate_instance.region'] = associateInstanceRegion;
        return this;
    }
    public set associateInstanceRegion(associateInstanceRegion: Array<string>  | undefined) {
        this['associate_instance.region'] = associateInstanceRegion;
    }
    public get associateInstanceRegion(): Array<string> | undefined {
        return this['associate_instance.region'];
    }
    public withAssociateInstancePublicBorderGroup(associateInstancePublicBorderGroup: Array<string>): CountGlobalEipSegmentRequest {
        this['associate_instance.public_border_group'] = associateInstancePublicBorderGroup;
        return this;
    }
    public set associateInstancePublicBorderGroup(associateInstancePublicBorderGroup: Array<string>  | undefined) {
        this['associate_instance.public_border_group'] = associateInstancePublicBorderGroup;
    }
    public get associateInstancePublicBorderGroup(): Array<string> | undefined {
        return this['associate_instance.public_border_group'];
    }
    public withAssociateInstanceInstanceSite(associateInstanceInstanceSite: Array<string>): CountGlobalEipSegmentRequest {
        this['associate_instance.instance_site'] = associateInstanceInstanceSite;
        return this;
    }
    public set associateInstanceInstanceSite(associateInstanceInstanceSite: Array<string>  | undefined) {
        this['associate_instance.instance_site'] = associateInstanceInstanceSite;
    }
    public get associateInstanceInstanceSite(): Array<string> | undefined {
        return this['associate_instance.instance_site'];
    }
    public withAssociateInstanceInstanceType(associateInstanceInstanceType: Array<string>): CountGlobalEipSegmentRequest {
        this['associate_instance.instance_type'] = associateInstanceInstanceType;
        return this;
    }
    public set associateInstanceInstanceType(associateInstanceInstanceType: Array<string>  | undefined) {
        this['associate_instance.instance_type'] = associateInstanceInstanceType;
    }
    public get associateInstanceInstanceType(): Array<string> | undefined {
        return this['associate_instance.instance_type'];
    }
    public withAssociateInstanceInstanceId(associateInstanceInstanceId: Array<string>): CountGlobalEipSegmentRequest {
        this['associate_instance.instance_id'] = associateInstanceInstanceId;
        return this;
    }
    public set associateInstanceInstanceId(associateInstanceInstanceId: Array<string>  | undefined) {
        this['associate_instance.instance_id'] = associateInstanceInstanceId;
    }
    public get associateInstanceInstanceId(): Array<string> | undefined {
        return this['associate_instance.instance_id'];
    }
    public withAssociateInstanceProjectId(associateInstanceProjectId: Array<string>): CountGlobalEipSegmentRequest {
        this['associate_instance.project_id'] = associateInstanceProjectId;
        return this;
    }
    public set associateInstanceProjectId(associateInstanceProjectId: Array<string>  | undefined) {
        this['associate_instance.project_id'] = associateInstanceProjectId;
    }
    public get associateInstanceProjectId(): Array<string> | undefined {
        return this['associate_instance.project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): CountGlobalEipSegmentRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): CountGlobalEipSegmentRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountGlobalEipSegmentRequestFieldsEnum {
    COUNT = 'count'
}
/**
    * @export
    * @enum {string}
    */
export enum CountGlobalEipSegmentRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum CountGlobalEipSegmentRequestStatusEnum {
    IDLE = 'idle',
    INUSE = 'inuse',
    PENDING_CREATE = 'pending_create',
    PENDING_UPDATE = 'pending_update'
}
