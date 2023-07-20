

export class CreateSharedBandwidthOption {
    private 'enterprise_project_id'?: string;
    public name?: string;
    public size?: number;
    private 'charge_mode'?: CreateSharedBandwidthOptionChargeModeEnum | string;
    private 'public_border_group'?: string;
    private 'bandwidth_type'?: string;
    public constructor(name?: string, size?: number) { 
        this['name'] = name;
        this['size'] = size;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSharedBandwidthOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
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
    public withChargeMode(chargeMode: CreateSharedBandwidthOptionChargeModeEnum | string): CreateSharedBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateSharedBandwidthOptionChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateSharedBandwidthOptionChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): CreateSharedBandwidthOption {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withBandwidthType(bandwidthType: string): CreateSharedBandwidthOption {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
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
