

export class PrepaidUpdateOption {
    private 'auto_pay'?: boolean | undefined;
    private 'change_mode'?: PrepaidUpdateOptionChangeModeEnum | undefined;
    private 'period_num'?: number | undefined;
    private 'period_type'?: PrepaidUpdateOptionPeriodTypeEnum | undefined;
    public constructor() { 
    }
    public withAutoPay(autoPay: boolean): PrepaidUpdateOption {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay() {
        return this['auto_pay'];
    }
    public withChangeMode(changeMode: PrepaidUpdateOptionChangeModeEnum): PrepaidUpdateOption {
        this['change_mode'] = changeMode;
        return this;
    }
    public set changeMode(changeMode: PrepaidUpdateOptionChangeModeEnum | undefined) {
        this['change_mode'] = changeMode;
    }
    public get changeMode() {
        return this['change_mode'];
    }
    public withPeriodNum(periodNum: number): PrepaidUpdateOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
    public withPeriodType(periodType: PrepaidUpdateOptionPeriodTypeEnum): PrepaidUpdateOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PrepaidUpdateOptionPeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrepaidUpdateOptionChangeModeEnum {
    IMMEDIATE = 'immediate',
    DELAY = 'delay'
}
/**
    * @export
    * @enum {string}
    */
export enum PrepaidUpdateOptionPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
