

export class CreateLoadbalancerReq {
    private 'tenant_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'vip_subnet_id': string | undefined;
    private 'vip_address'?: string | undefined;
    public provider?: CreateLoadbalancerReqProviderEnum;
    private 'admin_state_up'?: boolean | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(vipSubnetId?: any) { 
        this['vip_subnet_id'] = vipSubnetId;
    }
    public withTenantId(tenantId: string): CreateLoadbalancerReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
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
    public set vipSubnetId(vipSubnetId: string | undefined) {
        this['vip_subnet_id'] = vipSubnetId;
    }
    public get vipSubnetId() {
        return this['vip_subnet_id'];
    }
    public withVipAddress(vipAddress: string): CreateLoadbalancerReq {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withProvider(provider: CreateLoadbalancerReqProviderEnum): CreateLoadbalancerReq {
        this['provider'] = provider;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateLoadbalancerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateLoadbalancerReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLoadbalancerReqProviderEnum {
    VLB = 'vlb'
}
