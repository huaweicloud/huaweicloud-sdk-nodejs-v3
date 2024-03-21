import { GlobalConnectionBandwidthInfo } from './GlobalConnectionBandwidthInfo';
import { InstanceInfo } from './InstanceInfo';
import { InternetBandwidthInfo } from './InternetBandwidthInfo';
import { Tag } from './Tag';


export class DetachInternetBandwidthGlobalEips {
    public id?: string;
    public name?: string;
    private 'domain_id'?: string;
    public description?: string;
    private 'access_site'?: string;
    private 'geip_pool_name'?: string;
    public isp?: string;
    private 'ip_version'?: DetachInternetBandwidthGlobalEipsIpVersionEnum | number;
    private 'ip_address'?: string;
    private 'ipv6_address'?: string;
    public freezen?: boolean;
    private 'freezen_info'?: string;
    public polluted?: boolean;
    public status?: DetachInternetBandwidthGlobalEipsStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'internet_bandwidth_info'?: InternetBandwidthInfo;
    private 'global_connection_bandwidth_info'?: GlobalConnectionBandwidthInfo;
    private 'associate_instance_info'?: InstanceInfo;
    private 'is_pre_paid'?: boolean;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    private 'enterprise_project_id'?: object;
    public constructor() { 
    }
    public withId(id: string): DetachInternetBandwidthGlobalEips {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DetachInternetBandwidthGlobalEips {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): DetachInternetBandwidthGlobalEips {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDescription(description: string): DetachInternetBandwidthGlobalEips {
        this['description'] = description;
        return this;
    }
    public withAccessSite(accessSite: string): DetachInternetBandwidthGlobalEips {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withGeipPoolName(geipPoolName: string): DetachInternetBandwidthGlobalEips {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: string  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): string | undefined {
        return this['geip_pool_name'];
    }
    public withIsp(isp: string): DetachInternetBandwidthGlobalEips {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: DetachInternetBandwidthGlobalEipsIpVersionEnum | number): DetachInternetBandwidthGlobalEips {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: DetachInternetBandwidthGlobalEipsIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): DetachInternetBandwidthGlobalEipsIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withIpAddress(ipAddress: string): DetachInternetBandwidthGlobalEips {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withIpv6Address(ipv6Address: string): DetachInternetBandwidthGlobalEips {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: string  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): string | undefined {
        return this['ipv6_address'];
    }
    public withFreezen(freezen: boolean): DetachInternetBandwidthGlobalEips {
        this['freezen'] = freezen;
        return this;
    }
    public withFreezenInfo(freezenInfo: string): DetachInternetBandwidthGlobalEips {
        this['freezen_info'] = freezenInfo;
        return this;
    }
    public set freezenInfo(freezenInfo: string  | undefined) {
        this['freezen_info'] = freezenInfo;
    }
    public get freezenInfo(): string | undefined {
        return this['freezen_info'];
    }
    public withPolluted(polluted: boolean): DetachInternetBandwidthGlobalEips {
        this['polluted'] = polluted;
        return this;
    }
    public withStatus(status: DetachInternetBandwidthGlobalEipsStatusEnum | string): DetachInternetBandwidthGlobalEips {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): DetachInternetBandwidthGlobalEips {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): DetachInternetBandwidthGlobalEips {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withInternetBandwidthInfo(internetBandwidthInfo: InternetBandwidthInfo): DetachInternetBandwidthGlobalEips {
        this['internet_bandwidth_info'] = internetBandwidthInfo;
        return this;
    }
    public set internetBandwidthInfo(internetBandwidthInfo: InternetBandwidthInfo  | undefined) {
        this['internet_bandwidth_info'] = internetBandwidthInfo;
    }
    public get internetBandwidthInfo(): InternetBandwidthInfo | undefined {
        return this['internet_bandwidth_info'];
    }
    public withGlobalConnectionBandwidthInfo(globalConnectionBandwidthInfo: GlobalConnectionBandwidthInfo): DetachInternetBandwidthGlobalEips {
        this['global_connection_bandwidth_info'] = globalConnectionBandwidthInfo;
        return this;
    }
    public set globalConnectionBandwidthInfo(globalConnectionBandwidthInfo: GlobalConnectionBandwidthInfo  | undefined) {
        this['global_connection_bandwidth_info'] = globalConnectionBandwidthInfo;
    }
    public get globalConnectionBandwidthInfo(): GlobalConnectionBandwidthInfo | undefined {
        return this['global_connection_bandwidth_info'];
    }
    public withAssociateInstanceInfo(associateInstanceInfo: InstanceInfo): DetachInternetBandwidthGlobalEips {
        this['associate_instance_info'] = associateInstanceInfo;
        return this;
    }
    public set associateInstanceInfo(associateInstanceInfo: InstanceInfo  | undefined) {
        this['associate_instance_info'] = associateInstanceInfo;
    }
    public get associateInstanceInfo(): InstanceInfo | undefined {
        return this['associate_instance_info'];
    }
    public withIsPrePaid(isPrePaid: boolean): DetachInternetBandwidthGlobalEips {
        this['is_pre_paid'] = isPrePaid;
        return this;
    }
    public set isPrePaid(isPrePaid: boolean  | undefined) {
        this['is_pre_paid'] = isPrePaid;
    }
    public get isPrePaid(): boolean | undefined {
        return this['is_pre_paid'];
    }
    public withTags(tags: Array<Tag>): DetachInternetBandwidthGlobalEips {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): DetachInternetBandwidthGlobalEips {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: object): DetachInternetBandwidthGlobalEips {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: object  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): object | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DetachInternetBandwidthGlobalEipsIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum DetachInternetBandwidthGlobalEipsStatusEnum {
    PENDING_CREATE = 'PENDING_CREATE',
    IDLE = 'IDLE',
    INUSE = 'INUSE',
    PENDING_UPDATE = 'PENDING_UPDATE'
}
