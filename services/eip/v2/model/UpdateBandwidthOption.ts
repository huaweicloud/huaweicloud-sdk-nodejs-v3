

export class UpdateBandwidthOption {
    public name?: string;
    public size?: number;
    private 'charge_mode'?: UpdateBandwidthOptionChargeModeEnum | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): UpdateBandwidthOption {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: UpdateBandwidthOptionChargeModeEnum): UpdateBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: UpdateBandwidthOptionChargeModeEnum | undefined) {
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
export enum UpdateBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
