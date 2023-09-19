import { Tag } from './Tag';


export class BandwidthPackage {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    public status?: BandwidthPackageStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'admin_state_up'?: boolean;
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'spec_code'?: BandwidthPackageSpecCodeEnum | string;
    private 'billing_mode'?: BandwidthPackageBillingModeEnum | string;
    private 'charge_mode'?: BandwidthPackageChargeModeEnum | string;
    public bandwidth?: number;
    private 'resource_id'?: string;
    private 'resource_type'?: BandwidthPackageResourceTypeEnum | string;
    private 'local_area_id'?: BandwidthPackageLocalAreaIdEnum | string;
    private 'remote_area_id'?: BandwidthPackageRemoteAreaIdEnum | string;
    private 'project_id'?: string;
    private 'interflow_mode'?: BandwidthPackageInterflowModeEnum | string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withId(id: string): BandwidthPackage {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BandwidthPackage {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BandwidthPackage {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): BandwidthPackage {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BandwidthPackage {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: BandwidthPackageStatusEnum | string): BandwidthPackage {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): BandwidthPackage {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): BandwidthPackage {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withAdminStateUp(adminStateUp: boolean): BandwidthPackage {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withOrderId(orderId: string): BandwidthPackage {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProductId(productId: string): BandwidthPackage {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSpecCode(specCode: BandwidthPackageSpecCodeEnum | string): BandwidthPackage {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: BandwidthPackageSpecCodeEnum | string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): BandwidthPackageSpecCodeEnum | string | undefined {
        return this['spec_code'];
    }
    public withBillingMode(billingMode: BandwidthPackageBillingModeEnum | string): BandwidthPackage {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: BandwidthPackageBillingModeEnum | string  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): BandwidthPackageBillingModeEnum | string | undefined {
        return this['billing_mode'];
    }
    public withChargeMode(chargeMode: BandwidthPackageChargeModeEnum | string): BandwidthPackage {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: BandwidthPackageChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): BandwidthPackageChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBandwidth(bandwidth: number): BandwidthPackage {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withResourceId(resourceId: string): BandwidthPackage {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: BandwidthPackageResourceTypeEnum | string): BandwidthPackage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BandwidthPackageResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BandwidthPackageResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLocalAreaId(localAreaId: BandwidthPackageLocalAreaIdEnum | string): BandwidthPackage {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: BandwidthPackageLocalAreaIdEnum | string  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): BandwidthPackageLocalAreaIdEnum | string | undefined {
        return this['local_area_id'];
    }
    public withRemoteAreaId(remoteAreaId: BandwidthPackageRemoteAreaIdEnum | string): BandwidthPackage {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: BandwidthPackageRemoteAreaIdEnum | string  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): BandwidthPackageRemoteAreaIdEnum | string | undefined {
        return this['remote_area_id'];
    }
    public withProjectId(projectId: string): BandwidthPackage {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInterflowMode(interflowMode: BandwidthPackageInterflowModeEnum | string): BandwidthPackage {
        this['interflow_mode'] = interflowMode;
        return this;
    }
    public set interflowMode(interflowMode: BandwidthPackageInterflowModeEnum | string  | undefined) {
        this['interflow_mode'] = interflowMode;
    }
    public get interflowMode(): BandwidthPackageInterflowModeEnum | string | undefined {
        return this['interflow_mode'];
    }
    public withTags(tags: Array<Tag>): BandwidthPackage {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageStatusEnum {
    ACTIVE = 'ACTIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageSpecCodeEnum {
    BANDWIDTH_AFTOELA = 'bandwidth.aftoela',
    BANDWIDTH_AFTONLA = 'bandwidth.aftonla',
    BANDWIDTH_AFTOWLA = 'bandwidth.aftowla',
    BANDWIDTH_APTOAF = 'bandwidth.aptoaf',
    BANDWIDTH_APTOAP = 'bandwidth.aptoap',
    BANDWIDTH_APTOELA = 'bandwidth.aptoela',
    BANDWIDTH_APTONLA = 'bandwidth.aptonla',
    BANDWIDTH_APTOWLA = 'bandwidth.aptowla',
    BANDWIDTH_CMTOAF = 'bandwidth.cmtoaf',
    BANDWIDTH_CMTOAP = 'bandwidth.cmtoap',
    BANDWIDTH_CMTOCM = 'bandwidth.cmtocm',
    BANDWIDTH_CMTOELA = 'bandwidth.cmtoela',
    BANDWIDTH_CMTONLA = 'bandwidth.cmtonla',
    BANDWIDTH_CMTOWLA = 'bandwidth.cmtowla',
    BANDWIDTH_ELATOELA = 'bandwidth.elatoela',
    BANDWIDTH_ELATONLA = 'bandwidth.elatonla',
    BANDWIDTH_WLATOELA = 'bandwidth.wlatoela',
    BANDWIDTH_WLATONLA = 'bandwidth.wlatonla',
    BANDWIDTH_WLATOWLA = 'bandwidth.wlatowla'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageBillingModeEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4',
    E_5 = '5',
    E_6 = '6'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageChargeModeEnum {
    BANDWIDTH = 'bandwidth'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageLocalAreaIdEnum {
    CHINESE_MAINLAND = 'Chinese-Mainland',
    ASIA_PACIFIC = 'Asia-Pacific',
    AFRICA = 'Africa',
    WESTERN_LATIN_AMERICA = 'Western-Latin-America',
    EASTERN_LATIN_AMERICA = 'Eastern-Latin-America',
    NORTHERN_LATIN_AMERICA = 'Northern-Latin-America'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageRemoteAreaIdEnum {
    CHINESE_MAINLAND = 'Chinese-Mainland',
    ASIA_PACIFIC = 'Asia-Pacific',
    AFRICA = 'Africa',
    WESTERN_LATIN_AMERICA = 'Western-Latin-America',
    EASTERN_LATIN_AMERICA = 'Eastern-Latin-America',
    NORTHERN_LATIN_AMERICA = 'Northern-Latin-America'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthPackageInterflowModeEnum {
    AREA = 'Area',
    REGION = 'Region'
}
