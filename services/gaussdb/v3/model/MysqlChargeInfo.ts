

export class MysqlChargeInfo {
    private 'charge_mode'?: MysqlChargeInfoChargeModeEnum | string;
    private 'period_type'?: MysqlChargeInfoPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: string;
    private 'is_auto_pay'?: string;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: MysqlChargeInfoChargeModeEnum | string): MysqlChargeInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: MysqlChargeInfoChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): MysqlChargeInfoChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPeriodType(periodType: MysqlChargeInfoPeriodTypeEnum | string): MysqlChargeInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: MysqlChargeInfoPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): MysqlChargeInfoPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): MysqlChargeInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: string): MysqlChargeInfo {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: string  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): string | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: string): MysqlChargeInfo {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MysqlChargeInfoChargeModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum MysqlChargeInfoPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
