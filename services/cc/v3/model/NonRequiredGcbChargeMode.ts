

export class NonRequiredGcbChargeMode {
    private 'charge_mode'?: NonRequiredGcbChargeModeChargeModeEnum | string;
    public constructor() { 
    }
    public withChargeMode(chargeMode: NonRequiredGcbChargeModeChargeModeEnum | string): NonRequiredGcbChargeMode {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: NonRequiredGcbChargeModeChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): NonRequiredGcbChargeModeChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NonRequiredGcbChargeModeChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95',
    E_95AVR = '95avr'
}
