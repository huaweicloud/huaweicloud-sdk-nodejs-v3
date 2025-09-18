import { BillingMode } from './BillingMode';
import { BillingModeEnum } from './BillingModeEnum';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { LocalAreaId } from './LocalAreaId';
import { LocalAreaIdDef } from './LocalAreaIdDef';
import { Name } from './Name';
import { ProjectId } from './ProjectId';
import { RemoteAreaId } from './RemoteAreaId';
import { RemoteAreaIdDef } from './RemoteAreaIdDef';
import { ResourceId } from './ResourceId';
import { ResourceType } from './ResourceType';
import { SpecCode } from './SpecCode';
import { Tag } from './Tag';
import { Tags } from './Tags';
import { UUID32Identifier } from './UUID32Identifier';
import { UpdatedAt } from './UpdatedAt';


export class BandwidthPackage {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'resource_id'?: string;
    private 'resource_type'?: BandwidthPackageResourceTypeEnum | string;
    private 'local_area_id'?: LocalAreaIdDef;
    private 'remote_area_id'?: RemoteAreaIdDef;
    private 'spec_code'?: string;
    private 'billing_mode'?: BillingModeEnum;
    public tags?: Array<Tag>;
    public status?: BandwidthPackageStatusEnum | string;
    private 'admin_state_up'?: boolean;
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'charge_mode'?: BandwidthPackageChargeModeEnum | string;
    public bandwidth?: number;
    private 'interflow_mode'?: BandwidthPackageInterflowModeEnum | string;
    public constructor(id?: string, name?: string, domainId?: string, projectId?: string, createdAt?: Date, updatedAt?: Date, resourceId?: string, resourceType?: string, localAreaId?: LocalAreaIdDef, remoteAreaId?: RemoteAreaIdDef, specCode?: string, billingMode?: BillingModeEnum) { 
        this['id'] = id;
        this['name'] = name;
        this['domain_id'] = domainId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['local_area_id'] = localAreaId;
        this['remote_area_id'] = remoteAreaId;
        this['spec_code'] = specCode;
        this['billing_mode'] = billingMode;
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
    public withLocalAreaId(localAreaId: LocalAreaIdDef): BandwidthPackage {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: LocalAreaIdDef  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): LocalAreaIdDef | undefined {
        return this['local_area_id'];
    }
    public withRemoteAreaId(remoteAreaId: RemoteAreaIdDef): BandwidthPackage {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: RemoteAreaIdDef  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): RemoteAreaIdDef | undefined {
        return this['remote_area_id'];
    }
    public withSpecCode(specCode: string): BandwidthPackage {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withBillingMode(billingMode: BillingModeEnum): BandwidthPackage {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: BillingModeEnum  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): BillingModeEnum | undefined {
        return this['billing_mode'];
    }
    public withTags(tags: Array<Tag>): BandwidthPackage {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: BandwidthPackageStatusEnum | string): BandwidthPackage {
        this['status'] = status;
        return this;
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
export enum BandwidthPackageStatusEnum {
    ACTIVE = 'ACTIVE'
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
export enum BandwidthPackageInterflowModeEnum {
    AREA = 'Area',
    REGION = 'Region'
}
