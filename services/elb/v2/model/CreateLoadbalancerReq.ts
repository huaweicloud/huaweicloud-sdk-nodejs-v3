

export class CreateLoadbalancerReq {
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'vip_subnet_id'?: string;
    private 'vip_address'?: string;
    public provider?: CreateLoadbalancerReqProviderEnum | string;
    private 'admin_state_up'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'protection_status'?: CreateLoadbalancerReqProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(vipSubnetId?: string) { 
        this['vip_subnet_id'] = vipSubnetId;
    }
    public withTenantId(tenantId: string): CreateLoadbalancerReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): CreateLoadbalancerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateLoadbalancerReq {
        this['description'] = description;
        return this;
    }
    public withVipSubnetId(vipSubnetId: string): CreateLoadbalancerReq {
        this['vip_subnet_id'] = vipSubnetId;
        return this;
    }
    public set vipSubnetId(vipSubnetId: string  | undefined) {
        this['vip_subnet_id'] = vipSubnetId;
    }
    public get vipSubnetId(): string | undefined {
        return this['vip_subnet_id'];
    }
    public withVipAddress(vipAddress: string): CreateLoadbalancerReq {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withProvider(provider: CreateLoadbalancerReqProviderEnum | string): CreateLoadbalancerReq {
        this['provider'] = provider;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateLoadbalancerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateLoadbalancerReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProtectionStatus(protectionStatus: CreateLoadbalancerReqProtectionStatusEnum | string): CreateLoadbalancerReq {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: CreateLoadbalancerReqProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): CreateLoadbalancerReqProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): CreateLoadbalancerReq {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLoadbalancerReqProviderEnum {
    VLB = 'vlb'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateLoadbalancerReqProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
