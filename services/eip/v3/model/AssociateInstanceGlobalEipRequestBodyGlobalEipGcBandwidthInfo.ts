import { AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags } from './AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags';


export class AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTypeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'charge_mode'?: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoChargeModeEnum | string;
    public bandwidth?: number;
    public size?: number;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    public tags?: Array<AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags>;
    public constructor() { 
    }
    public withId(id: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['description'] = description;
        return this;
    }
    public withType(type: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTypeEnum | string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withChargeMode(chargeMode: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoChargeModeEnum | string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBandwidth(bandwidth: number): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withSize(size: number): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['size'] = size;
        return this;
    }
    public withLocalArea(localArea: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withTags(tags: Array<AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags>): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTypeEnum {
    REGION = 'Region'
}
/**
    * @export
    * @enum {string}
    */
export enum AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoChargeModeEnum {
    BWD = 'bwd'
}
