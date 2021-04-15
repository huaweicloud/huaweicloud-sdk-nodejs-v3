

export class PrePaidServerEipExtendParam {
    public chargingMode?: PrePaidServerEipExtendParamChargingModeEnum;
    public constructor() { 
    }
    public withChargingMode(chargingMode: PrePaidServerEipExtendParamChargingModeEnum): PrePaidServerEipExtendParam {
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
