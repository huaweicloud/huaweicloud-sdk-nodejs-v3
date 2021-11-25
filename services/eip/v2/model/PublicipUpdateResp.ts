import { ProfileResp } from './ProfileResp';


export class PublicipUpdateResp {
    private 'bandwidth_id'?: string | undefined;
    private 'bandwidth_name'?: string | undefined;
    private 'bandwidth_share_type'?: PublicipUpdateRespBandwidthShareTypeEnum | undefined;
    private 'bandwidth_size'?: number | undefined;
    private 'create_time'?: Date | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public id?: string;
    private 'port_id'?: string | undefined;
    private 'private_ip_address'?: string | undefined;
    public profile?: ProfileResp;
    private 'public_ip_address'?: string | undefined;
    public status?: PublicipUpdateRespStatusEnum;
    private 'tenant_id'?: string | undefined;
    public type?: string;
    private 'public_ipv6_address'?: string | undefined;
    private 'ip_version'?: PublicipUpdateRespIpVersionEnum | undefined;
    public alias?: string;
    public constructor() { 
    }
    public withBandwidthId(bandwidthId: string): PublicipUpdateResp {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId() {
        return this['bandwidth_id'];
    }
    public withBandwidthName(bandwidthName: string): PublicipUpdateResp {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName() {
        return this['bandwidth_name'];
    }
    public withBandwidthShareType(bandwidthShareType: PublicipUpdateRespBandwidthShareTypeEnum): PublicipUpdateResp {
        this['bandwidth_share_type'] = bandwidthShareType;
        return this;
    }
    public set bandwidthShareType(bandwidthShareType: PublicipUpdateRespBandwidthShareTypeEnum | undefined) {
        this['bandwidth_share_type'] = bandwidthShareType;
    }
    public get bandwidthShareType() {
        return this['bandwidth_share_type'];
    }
    public withBandwidthSize(bandwidthSize: number): PublicipUpdateResp {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize() {
        return this['bandwidth_size'];
    }
    public withCreateTime(createTime: Date): PublicipUpdateResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicipUpdateResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withId(id: string): PublicipUpdateResp {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): PublicipUpdateResp {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withPrivateIpAddress(privateIpAddress: string): PublicipUpdateResp {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress() {
        return this['private_ip_address'];
    }
    public withProfile(profile: ProfileResp): PublicipUpdateResp {
        this['profile'] = profile;
        return this;
    }
    public withPublicIpAddress(publicIpAddress: string): PublicipUpdateResp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress() {
        return this['public_ip_address'];
    }
    public withStatus(status: PublicipUpdateRespStatusEnum): PublicipUpdateResp {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): PublicipUpdateResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withType(type: string): PublicipUpdateResp {
        this['type'] = type;
        return this;
    }
    public withPublicIpv6Address(publicIpv6Address: string): PublicipUpdateResp {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address() {
        return this['public_ipv6_address'];
    }
    public withIpVersion(ipVersion: PublicipUpdateRespIpVersionEnum): PublicipUpdateResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipUpdateRespIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withAlias(alias: string): PublicipUpdateResp {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipUpdateRespBandwidthShareTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipUpdateRespStatusEnum {
    FREEZED = 'FREEZED',
    BIND_ERROR = 'BIND_ERROR',
    BINDING = 'BINDING',
    PENDING_DELETE = 'PENDING_DELETE',
    PENDING_CREATE = 'PENDING_CREATE',
    NOTIFYING = 'NOTIFYING',
    NOTIFY_DELETE = 'NOTIFY_DELETE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    DOWN = 'DOWN',
    ACTIVE = 'ACTIVE',
    ELB = 'ELB',
    ERROR = 'ERROR',
    VPN = 'VPN'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipUpdateRespIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
