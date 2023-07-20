

export class PrePaidServerEipExtendParam {
    public chargingMode?: PrePaidServerEipExtendParamChargingModeEnum | string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: PrePaidServerEipExtendParamChargingModeEnum | string): PrePaidServerEipExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerEipExtendParamChargingModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
