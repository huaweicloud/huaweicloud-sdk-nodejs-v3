

export class PrepaidCreateOption {
    private 'period_type': PrepaidCreateOptionPeriodTypeEnum | undefined;
    private 'period_num'?: number | undefined;
    private 'auto_renew'?: boolean | undefined;
    private 'auto_pay'?: boolean | undefined;
    public constructor(periodType?: any) { 
        this['period_type'] = periodType;
    }
    public withPeriodType(periodType: PrepaidCreateOptionPeriodTypeEnum): PrepaidCreateOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PrepaidCreateOptionPeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PrepaidCreateOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
    public withAutoRenew(autoRenew: boolean): PrepaidCreateOption {
        this['auto_renew'] = autoRenew;
        return this;
    }
    public set autoRenew(autoRenew: boolean | undefined) {
        this['auto_renew'] = autoRenew;
    }
    public get autoRenew() {
        return this['auto_renew'];
    }
    public withAutoPay(autoPay: boolean): PrepaidCreateOption {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay() {
        return this['auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrepaidCreateOptionPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
