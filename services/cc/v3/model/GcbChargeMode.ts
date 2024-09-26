

export class GcbChargeMode {
    private 'charge_mode'?: GcbChargeModeChargeModeEnum | string;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
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
    E_95 = '95',
    E_95AVR = '95avr'
}
