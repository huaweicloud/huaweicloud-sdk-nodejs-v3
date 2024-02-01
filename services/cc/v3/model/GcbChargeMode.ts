

export class GcbChargeMode {
    private 'charge_mode'?: GcbChargeModeChargeModeEnum | string;
    public constructor() { 
    }
    public withChargeMode(chargeMode: GcbChargeModeChargeModeEnum | string): GcbChargeMode {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: GcbChargeModeChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): GcbChargeModeChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GcbChargeModeChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
