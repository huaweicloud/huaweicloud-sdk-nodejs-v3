

export class ExtendParamEip {
    public chargingMode?: ExtendParamEipChargingModeEnum | string;
    public constructor(chargingMode?: string) { 
        this['chargingMode'] = chargingMode;
    }
    public withChargingMode(chargingMode: ExtendParamEipChargingModeEnum | string): ExtendParamEip {
        this['chargingMode'] = chargingMode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExtendParamEipChargingModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
