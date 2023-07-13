

export class BssParamForCreateVolume {
    public chargingMode?: BssParamForCreateVolumeChargingModeEnum;
    public isAutoPay?: BssParamForCreateVolumeIsAutoPayEnum;
    public isAutoRenew?: BssParamForCreateVolumeIsAutoRenewEnum;
    public periodNum?: number;
    public periodType?: BssParamForCreateVolumePeriodTypeEnum;
    public constructor() { 
    }
    public withChargingMode(chargingMode: BssParamForCreateVolumeChargingModeEnum): BssParamForCreateVolume {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withIsAutoPay(isAutoPay: BssParamForCreateVolumeIsAutoPayEnum): BssParamForCreateVolume {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: BssParamForCreateVolumeIsAutoRenewEnum): BssParamForCreateVolume {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withPeriodNum(periodNum: number): BssParamForCreateVolume {
        this['periodNum'] = periodNum;
        return this;
    }
    public withPeriodType(periodType: BssParamForCreateVolumePeriodTypeEnum): BssParamForCreateVolume {
        this['periodType'] = periodType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssParamForCreateVolumeChargingModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid'
}
/**
    * @export
    * @enum {string}
    */
export enum BssParamForCreateVolumeIsAutoPayEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum BssParamForCreateVolumeIsAutoRenewEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum BssParamForCreateVolumePeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
