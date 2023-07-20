

export class PostPaidServerEipExtendParam {
    public chargingMode?: PostPaidServerEipExtendParamChargingModeEnum | string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: PostPaidServerEipExtendParamChargingModeEnum | string): PostPaidServerEipExtendParam {
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
