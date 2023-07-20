

export class ChargeInfoResponse {
    private 'charge_mode'?: ChargeInfoResponseChargeModeEnum | string;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: ChargeInfoResponseChargeModeEnum | string): ChargeInfoResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChargeInfoResponseChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ChargeInfoResponseChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChargeInfoResponseChargeModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
