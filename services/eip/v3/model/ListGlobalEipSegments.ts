import { InstanceInfo } from './InstanceInfo';
import { InternetBandwidthInfo } from './InternetBandwidthInfo';
import { Tag } from './Tag';


export class ListGlobalEipSegments {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'access_site'?: string;
    private 'geip_pool_name'?: string;
    public isp?: string;
    private 'ip_version'?: number;
    public cidr?: string;
    private 'cidr_v6'?: string;
    public freezen?: boolean;
    private 'freezen_info'?: string;
    public status?: ListGlobalEipSegmentsStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'internet_bandwidth'?: InternetBandwidthInfo;
    private 'associate_instance'?: InstanceInfo;
    private 'is_pre_paid'?: boolean;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ListGlobalEipSegments {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListGlobalEipSegments {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListGlobalEipSegments {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): ListGlobalEipSegments {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAccessSite(accessSite: string): ListGlobalEipSegments {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withGeipPoolName(geipPoolName: string): ListGlobalEipSegments {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: string  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): string | undefined {
        return this['geip_pool_name'];
    }
    public withIsp(isp: string): ListGlobalEipSegments {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: number): ListGlobalEipSegments {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: string): ListGlobalEipSegments {
        this['cidr'] = cidr;
        return this;
    }
    public withCidrV6(cidrV6: string): ListGlobalEipSegments {
        this['cidr_v6'] = cidrV6;
        return this;
    }
    public set cidrV6(cidrV6: string  | undefined) {
        this['cidr_v6'] = cidrV6;
    }
    public get cidrV6(): string | undefined {
        return this['cidr_v6'];
    }
    public withFreezen(freezen: boolean): ListGlobalEipSegments {
        this['freezen'] = freezen;
        return this;
    }
    public withFreezenInfo(freezenInfo: string): ListGlobalEipSegments {
        this['freezen_info'] = freezenInfo;
        return this;
    }
    public set freezenInfo(freezenInfo: string  | undefined) {
        this['freezen_info'] = freezenInfo;
    }
    public get freezenInfo(): string | undefined {
        return this['freezen_info'];
    }
    public withStatus(status: ListGlobalEipSegmentsStatusEnum | string): ListGlobalEipSegments {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): ListGlobalEipSegments {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListGlobalEipSegments {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withInternetBandwidth(internetBandwidth: InternetBandwidthInfo): ListGlobalEipSegments {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: InternetBandwidthInfo  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): InternetBandwidthInfo | undefined {
        return this['internet_bandwidth'];
    }
    public withAssociateInstance(associateInstance: InstanceInfo): ListGlobalEipSegments {
        this['associate_instance'] = associateInstance;
        return this;
    }
    public set associateInstance(associateInstance: InstanceInfo  | undefined) {
        this['associate_instance'] = associateInstance;
    }
    public get associateInstance(): InstanceInfo | undefined {
        return this['associate_instance'];
    }
    public withIsPrePaid(isPrePaid: boolean): ListGlobalEipSegments {
        this['is_pre_paid'] = isPrePaid;
        return this;
    }
    public set isPrePaid(isPrePaid: boolean  | undefined) {
        this['is_pre_paid'] = isPrePaid;
    }
    public get isPrePaid(): boolean | undefined {
        return this['is_pre_paid'];
    }
    public withTags(tags: Array<Tag>): ListGlobalEipSegments {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): ListGlobalEipSegments {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGlobalEipSegments {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalEipSegmentsStatusEnum {
    IDLE = 'IDLE',
    INUSE = 'INUSE'
}
