

export class OpenGaussChargeInfoListResponse {
    private 'charge_mode'?: OpenGaussChargeInfoListResponseChargeModeEnum | string;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: OpenGaussChargeInfoListResponseChargeModeEnum | string): OpenGaussChargeInfoListResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: OpenGaussChargeInfoListResponseChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): OpenGaussChargeInfoListResponseChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussChargeInfoListResponseChargeModeEnum {
    POSTPAID = 'postPaid'
}
