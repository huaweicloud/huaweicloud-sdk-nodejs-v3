

export class CreateSharedBandwidthOption {
    private 'enterprise_project_id'?: string | undefined;
    public name: string;
    public size: number;
    private 'charge_mode'?: CreateSharedBandwidthOptionChargeModeEnum | undefined;
    private 'public_border_group'?: string | undefined;
    private 'bandwidth_type'?: string | undefined;
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
    public withPublicBorderGroup(publicBorderGroup: string): CreateSharedBandwidthOption {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
    public withBandwidthType(bandwidthType: string): CreateSharedBandwidthOption {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType() {
        return this['bandwidth_type'];
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
