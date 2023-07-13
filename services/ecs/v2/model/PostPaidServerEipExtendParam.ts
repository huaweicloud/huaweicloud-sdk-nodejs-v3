

export class PostPaidServerEipExtendParam {
    public chargingMode?: PostPaidServerEipExtendParamChargingModeEnum;
    public constructor() { 
    }
    public withChargingMode(chargingMode: PostPaidServerEipExtendParamChargingModeEnum): PostPaidServerEipExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostPaidServerEipExtendParamChargingModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
