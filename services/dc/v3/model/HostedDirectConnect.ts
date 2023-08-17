

export class HostedDirectConnect {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    public location?: string;
    private 'peer_location'?: string;
    private 'hosting_id'?: string;
    public provider?: string;
    private 'admin_state_up'?: boolean;
    public vlan?: number;
    public status?: HostedDirectConnectStatusEnum | string;
    private 'apply_time'?: string;
    private 'create_time'?: string;
    private 'provider_status'?: HostedDirectConnectProviderStatusEnum | string;
    public constructor() { 
    }
    public withId(id: string): HostedDirectConnect {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): HostedDirectConnect {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): HostedDirectConnect {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): HostedDirectConnect {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: number): HostedDirectConnect {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withLocation(location: string): HostedDirectConnect {
        this['location'] = location;
        return this;
    }
    public withPeerLocation(peerLocation: string): HostedDirectConnect {
        this['peer_location'] = peerLocation;
        return this;
    }
    public set peerLocation(peerLocation: string  | undefined) {
        this['peer_location'] = peerLocation;
    }
    public get peerLocation(): string | undefined {
        return this['peer_location'];
    }
    public withHostingId(hostingId: string): HostedDirectConnect {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: string  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): string | undefined {
        return this['hosting_id'];
    }
    public withProvider(provider: string): HostedDirectConnect {
        this['provider'] = provider;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): HostedDirectConnect {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withVlan(vlan: number): HostedDirectConnect {
        this['vlan'] = vlan;
        return this;
    }
    public withStatus(status: HostedDirectConnectStatusEnum | string): HostedDirectConnect {
        this['status'] = status;
        return this;
    }
    public withApplyTime(applyTime: string): HostedDirectConnect {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): string | undefined {
        return this['apply_time'];
    }
    public withCreateTime(createTime: string): HostedDirectConnect {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withProviderStatus(providerStatus: HostedDirectConnectProviderStatusEnum | string): HostedDirectConnect {
        this['provider_status'] = providerStatus;
        return this;
    }
    public set providerStatus(providerStatus: HostedDirectConnectProviderStatusEnum | string  | undefined) {
        this['provider_status'] = providerStatus;
    }
    public get providerStatus(): HostedDirectConnectProviderStatusEnum | string | undefined {
        return this['provider_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostedDirectConnectStatusEnum {
    BUILD = 'BUILD',
    PAID = 'PAID',
    APPLY = 'APPLY',
    PENDING_SURVEY = 'PENDING_SURVEY',
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    ERROR = 'ERROR',
    PENDING_DELETE = 'PENDING_DELETE',
    DELETED = 'DELETED',
    DENY = 'DENY',
    PENDING_PAY = 'PENDING_PAY',
    ORDERING = 'ORDERING',
    ACCEPT = 'ACCEPT',
    REJECTED = 'REJECTED'
}
/**
    * @export
    * @enum {string}
    */
export enum HostedDirectConnectProviderStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN'
}
