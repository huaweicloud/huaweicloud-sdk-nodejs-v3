

export class CreateSharedBandwidthOption {
    private 'enterprise_project_id'?: string | undefined;
    public name: string;
    public size: number;
    private 'charge_mode'?: CreateSharedBandwidthOptionChargeModeEnum | undefined;
    public constructor(name?: any, size?: any) { 
        this['name'] = name;
        this['size'] = size;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSharedBandwidthOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withName(name: string): CreateSharedBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): CreateSharedBandwidthOption {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: CreateSharedBandwidthOptionChargeModeEnum): CreateSharedBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateSharedBandwidthOptionChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSharedBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    E_95PEAK_PLUS = '95peak_plus'
}
