

export class PublicipCreateResp {
    private 'bandwidth_size'?: number | undefined;
    private 'create_time'?: Date | undefined;
    public id?: string;
    private 'public_ip_address'?: string | undefined;
    public status?: PublicipCreateRespStatusEnum;
    private 'tenant_id'?: string | undefined;
    public type?: string;
    private 'public_ipv6_address'?: string | undefined;
    private 'ip_version'?: PublicipCreateRespIpVersionEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public alias?: string;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: number): PublicipCreateResp {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize() {
        return this['bandwidth_size'];
    }
    public withCreateTime(createTime: Date): PublicipCreateResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withId(id: string): PublicipCreateResp {
        this['id'] = id;
        return this;
    }
    public withPublicIpAddress(publicIpAddress: string): PublicipCreateResp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress() {
        return this['public_ip_address'];
    }
    public withStatus(status: PublicipCreateRespStatusEnum): PublicipCreateResp {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): PublicipCreateResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withType(type: string): PublicipCreateResp {
        this['type'] = type;
        return this;
    }
    public withPublicIpv6Address(publicIpv6Address: string): PublicipCreateResp {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address() {
        return this['public_ipv6_address'];
    }
    public withIpVersion(ipVersion: PublicipCreateRespIpVersionEnum): PublicipCreateResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipCreateRespIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicipCreateResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withAlias(alias: string): PublicipCreateResp {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipCreateRespStatusEnum {
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
export enum PublicipCreateRespIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
