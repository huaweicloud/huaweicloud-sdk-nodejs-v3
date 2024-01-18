import { PublicIpInfo } from './PublicIpInfo';
import { ResourceList } from './ResourceList';


export class LoadbalancerResp {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'vip_subnet_id'?: string;
    private 'vip_port_id'?: string;
    private 'vip_address'?: string;
    public listeners?: Array<ResourceList>;
    public pools?: Array<ResourceList>;
    public provider?: string;
    private 'operating_status'?: LoadbalancerRespOperatingStatusEnum | string;
    private 'provisioning_status'?: LoadbalancerRespProvisioningStatusEnum | string;
    private 'admin_state_up'?: boolean;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    public tags?: Array<string>;
    public publicips?: Array<PublicIpInfo>;
    private 'charge_mode'?: string;
    private 'billing_info'?: string;
    private 'frozen_scene'?: string;
    private 'protection_status'?: LoadbalancerRespProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(id?: string, tenantId?: string, name?: string, description?: string, vipSubnetId?: string, vipPortId?: string, vipAddress?: string, listeners?: Array<ResourceList>, pools?: Array<ResourceList>, provider?: string, operatingStatus?: string, provisioningStatus?: string, adminStateUp?: boolean, createdAt?: string, updatedAt?: string, enterpriseProjectId?: string, projectId?: string, tags?: Array<string>, publicips?: Array<PublicIpInfo>, chargeMode?: string, billingInfo?: string) { 
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
        this['publicips'] = publicips;
        this['charge_mode'] = chargeMode;
        this['billing_info'] = billingInfo;
    }
    public withId(id: string): LoadbalancerResp {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): LoadbalancerResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
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
    public set vipSubnetId(vipSubnetId: string  | undefined) {
        this['vip_subnet_id'] = vipSubnetId;
    }
    public get vipSubnetId(): string | undefined {
        return this['vip_subnet_id'];
    }
    public withVipPortId(vipPortId: string): LoadbalancerResp {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string  | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId(): string | undefined {
        return this['vip_port_id'];
    }
    public withVipAddress(vipAddress: string): LoadbalancerResp {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
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
    public withOperatingStatus(operatingStatus: LoadbalancerRespOperatingStatusEnum | string): LoadbalancerResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: LoadbalancerRespOperatingStatusEnum | string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): LoadbalancerRespOperatingStatusEnum | string | undefined {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: LoadbalancerRespProvisioningStatusEnum | string): LoadbalancerResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: LoadbalancerRespProvisioningStatusEnum | string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): LoadbalancerRespProvisioningStatusEnum | string | undefined {
        return this['provisioning_status'];
    }
    public withAdminStateUp(adminStateUp: boolean): LoadbalancerResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCreatedAt(createdAt: string): LoadbalancerResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): LoadbalancerResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LoadbalancerResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): LoadbalancerResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<string>): LoadbalancerResp {
        this['tags'] = tags;
        return this;
    }
    public withPublicips(publicips: Array<PublicIpInfo>): LoadbalancerResp {
        this['publicips'] = publicips;
        return this;
    }
    public withChargeMode(chargeMode: string): LoadbalancerResp {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withBillingInfo(billingInfo: string): LoadbalancerResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withFrozenScene(frozenScene: string): LoadbalancerResp {
        this['frozen_scene'] = frozenScene;
        return this;
    }
    public set frozenScene(frozenScene: string  | undefined) {
        this['frozen_scene'] = frozenScene;
    }
    public get frozenScene(): string | undefined {
        return this['frozen_scene'];
    }
    public withProtectionStatus(protectionStatus: LoadbalancerRespProtectionStatusEnum | string): LoadbalancerResp {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: LoadbalancerRespProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): LoadbalancerRespProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): LoadbalancerResp {
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
/**
    * @export
    * @enum {string}
    */
export enum LoadbalancerRespProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
