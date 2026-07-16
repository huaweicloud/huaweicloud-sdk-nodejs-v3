

export class ChargingInfo {
    private 'charging_mode'?: ChargingInfoChargingModeEnum | string;
    private 'is_auto_pay'?: boolean;
    private 'is_auto_renew'?: boolean;
    private 'period_num'?: number;
    private 'period_type'?: ChargingInfoPeriodTypeEnum | string;
    public constructor(chargingMode?: string, periodNum?: number, periodType?: string) { 
        this['charging_mode'] = chargingMode;
        this['period_num'] = periodNum;
        this['period_type'] = periodType;
    }
    public withChargingMode(chargingMode: ChargingInfoChargingModeEnum | string): ChargingInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: ChargingInfoChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): ChargingInfoChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withIsAutoPay(isAutoPay: boolean): ChargingInfo {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): ChargingInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withPeriodNum(periodNum: number): ChargingInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodType(periodType: ChargingInfoPeriodTypeEnum | string): ChargingInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: ChargingInfoPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): ChargingInfoPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChargingInfoChargingModeEnum {
    COMMON = 'COMMON',
    POST_PAID = 'POST_PAID',
    PRE_PAID = 'PRE_PAID'
}
/**
    * @export
    * @enum {string}
    */
export enum ChargingInfoPeriodTypeEnum {
    ABSOLUTE = 'ABSOLUTE',
    DAY = 'DAY',
    HOUR = 'HOUR',
    MONTH = 'MONTH',
    WEEK = 'WEEK',
    YEAR = 'YEAR'
}
