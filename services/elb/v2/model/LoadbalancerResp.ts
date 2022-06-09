import { ResourceList } from './ResourceList';


export class LoadbalancerResp {
    public id: string;
    private 'tenant_id': string | undefined;
    public name: string;
    public description: string;
    private 'vip_subnet_id': string | undefined;
    private 'vip_port_id': string | undefined;
    private 'vip_address': string | undefined;
    public listeners: Array<ResourceList>;
    public pools: Array<ResourceList>;
    public provider: string;
    private 'operating_status': LoadbalancerRespOperatingStatusEnum | undefined;
    private 'provisioning_status': LoadbalancerRespProvisioningStatusEnum | undefined;
    private 'admin_state_up': boolean | undefined;
    private 'created_at': string | undefined;
    private 'updated_at': string | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'project_id': string | undefined;
    public tags: Array<string>;
    public constructor(id?: any, tenantId?: any, name?: any, description?: any, vipSubnetId?: any, vipPortId?: any, vipAddress?: any, listeners?: any, pools?: any, provider?: any, operatingStatus?: any, provisioningStatus?: any, adminStateUp?: any, createdAt?: any, updatedAt?: any, enterpriseProjectId?: any, projectId?: any, tags?: any) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['name'] = name;
        this['description'] = description;
        this['vip_subnet_id'] = vipSubnetId;
        this['vip_port_id'] = vipPortId;
        this['vip_address'] = vipAddress;
        this['listeners'] = listeners;
        this['pools'] = pools;
        this['provider'] = provider;
        this['operating_status'] = operatingStatus;
        this['provisioning_status'] = provisioningStatus;
        this['admin_state_up'] = adminStateUp;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['project_id'] = projectId;
        this['tags'] = tags;
    }
    public withId(id: string): LoadbalancerResp {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): LoadbalancerResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withName(name: string): LoadbalancerResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): LoadbalancerResp {
        this['description'] = description;
        return this;
    }
    public withVipSubnetId(vipSubnetId: string): LoadbalancerResp {
        this['vip_subnet_id'] = vipSubnetId;
        return this;
    }
    public set vipSubnetId(vipSubnetId: string | undefined) {
        this['vip_subnet_id'] = vipSubnetId;
    }
    public get vipSubnetId() {
        return this['vip_subnet_id'];
    }
    public withVipPortId(vipPortId: string): LoadbalancerResp {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId() {
        return this['vip_port_id'];
    }
    public withVipAddress(vipAddress: string): LoadbalancerResp {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withListeners(listeners: Array<ResourceList>): LoadbalancerResp {
        this['listeners'] = listeners;
        return this;
    }
    public withPools(pools: Array<ResourceList>): LoadbalancerResp {
        this['pools'] = pools;
        return this;
    }
    public withProvider(provider: string): LoadbalancerResp {
        this['provider'] = provider;
        return this;
    }
    public withOperatingStatus(operatingStatus: LoadbalancerRespOperatingStatusEnum): LoadbalancerResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: LoadbalancerRespOperatingStatusEnum | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: LoadbalancerRespProvisioningStatusEnum): LoadbalancerResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: LoadbalancerRespProvisioningStatusEnum | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withAdminStateUp(adminStateUp: boolean): LoadbalancerResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withCreatedAt(createdAt: string): LoadbalancerResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): LoadbalancerResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LoadbalancerResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): LoadbalancerResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTags(tags: Array<string>): LoadbalancerResp {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LoadbalancerRespOperatingStatusEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    DEGRADED = 'DEGRADED',
    DISABLED = 'DISABLED',
    NO_MONITOR = 'NO_MONITOR'
}
/**
    * @export
    * @enum {string}
    */
export enum LoadbalancerRespProvisioningStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    ERROR = 'ERROR'
}
