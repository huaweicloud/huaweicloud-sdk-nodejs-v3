

export class GlobalConnectionBandwidthSizeRange {
    private 'charge_mode'?: GlobalConnectionBandwidthSizeRangeChargeModeEnum | string;
    public min?: number;
    public max?: number;
    public constructor() { 
    }
    public withChargeMode(chargeMode: GlobalConnectionBandwidthSizeRangeChargeModeEnum | string): GlobalConnectionBandwidthSizeRange {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: GlobalConnectionBandwidthSizeRangeChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): GlobalConnectionBandwidthSizeRangeChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withMin(min: number): GlobalConnectionBandwidthSizeRange {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): GlobalConnectionBandwidthSizeRange {
        this['max'] = max;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthSizeRangeChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
