

export class BssParamForCreateVolume {
    public chargingMode?: BssParamForCreateVolumeChargingModeEnum | string;
    public isAutoPay?: BssParamForCreateVolumeIsAutoPayEnum | string;
    public isAutoRenew?: BssParamForCreateVolumeIsAutoRenewEnum | string;
    public periodNum?: number;
    public periodType?: BssParamForCreateVolumePeriodTypeEnum | string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: BssParamForCreateVolumeChargingModeEnum | string): BssParamForCreateVolume {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withIsAutoPay(isAutoPay: BssParamForCreateVolumeIsAutoPayEnum | string): BssParamForCreateVolume {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: BssParamForCreateVolumeIsAutoRenewEnum | string): BssParamForCreateVolume {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withPeriodNum(periodNum: number): BssParamForCreateVolume {
        this['periodNum'] = periodNum;
        return this;
    }
    public withPeriodType(periodType: BssParamForCreateVolumePeriodTypeEnum | string): BssParamForCreateVolume {
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
