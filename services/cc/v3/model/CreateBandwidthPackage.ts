import { AreaIdDef } from './AreaIdDef';
import { Description } from './Description';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { LocalAreaId } from './LocalAreaId';
import { Name } from './Name';
import { ProjectId } from './ProjectId';
import { RemoteAreaId } from './RemoteAreaId';


export class CreateBandwidthPackage {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'local_area_id'?: AreaIdDef;
    private 'remote_area_id'?: AreaIdDef;
    private 'charge_mode'?: CreateBandwidthPackageChargeModeEnum | string;
    private 'billing_mode'?: CreateBandwidthPackageBillingModeEnum | number;
    public bandwidth?: number;
    private 'resource_id'?: string;
    private 'resource_type'?: CreateBandwidthPackageResourceTypeEnum | string;
    private 'spec_code'?: string;
    private 'interflow_mode'?: CreateBandwidthPackageInterflowModeEnum | string;
    public constructor(name?: string, projectId?: string, localAreaId?: AreaIdDef, remoteAreaId?: AreaIdDef, chargeMode?: string, billingMode?: number, bandwidth?: number) { 
        this['name'] = name;
        this['project_id'] = projectId;
        this['local_area_id'] = localAreaId;
        this['remote_area_id'] = remoteAreaId;
        this['charge_mode'] = chargeMode;
        this['billing_mode'] = billingMode;
        this['bandwidth'] = bandwidth;
    }
    public withName(name: string): CreateBandwidthPackage {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateBandwidthPackage {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateBandwidthPackage {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): CreateBandwidthPackage {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLocalAreaId(localAreaId: AreaIdDef): CreateBandwidthPackage {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: AreaIdDef  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): AreaIdDef | undefined {
        return this['local_area_id'];
    }
    public withRemoteAreaId(remoteAreaId: AreaIdDef): CreateBandwidthPackage {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: AreaIdDef  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): AreaIdDef | undefined {
        return this['remote_area_id'];
    }
    public withChargeMode(chargeMode: CreateBandwidthPackageChargeModeEnum | string): CreateBandwidthPackage {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateBandwidthPackageChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateBandwidthPackageChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBillingMode(billingMode: CreateBandwidthPackageBillingModeEnum | number): CreateBandwidthPackage {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: CreateBandwidthPackageBillingModeEnum | number  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): CreateBandwidthPackageBillingModeEnum | number | undefined {
        return this['billing_mode'];
    }
    public withBandwidth(bandwidth: number): CreateBandwidthPackage {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withResourceId(resourceId: string): CreateBandwidthPackage {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: CreateBandwidthPackageResourceTypeEnum | string): CreateBandwidthPackage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateBandwidthPackageResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateBandwidthPackageResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withSpecCode(specCode: string): CreateBandwidthPackage {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withInterflowMode(interflowMode: CreateBandwidthPackageInterflowModeEnum | string): CreateBandwidthPackage {
        this['interflow_mode'] = interflowMode;
        return this;
    }
    public set interflowMode(interflowMode: CreateBandwidthPackageInterflowModeEnum | string  | undefined) {
        this['interflow_mode'] = interflowMode;
    }
    public get interflowMode(): CreateBandwidthPackageInterflowModeEnum | string | undefined {
        return this['interflow_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateBandwidthPackageChargeModeEnum {
    BANDWIDTH = 'bandwidth'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateBandwidthPackageBillingModeEnum {
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum CreateBandwidthPackageResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateBandwidthPackageInterflowModeEnum {
    AREA = 'Area',
    REGION = 'Region'
}
