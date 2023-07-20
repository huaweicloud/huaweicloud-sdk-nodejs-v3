

export class PrepaidUpdateOption {
    private 'auto_pay'?: boolean;
    private 'change_mode'?: PrepaidUpdateOptionChangeModeEnum | string;
    private 'period_num'?: number;
    private 'period_type'?: PrepaidUpdateOptionPeriodTypeEnum | string;
    public constructor() { 
    }
    public withAutoPay(autoPay: boolean): PrepaidUpdateOption {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean  | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay(): boolean | undefined {
        return this['auto_pay'];
    }
    public withChangeMode(changeMode: PrepaidUpdateOptionChangeModeEnum | string): PrepaidUpdateOption {
        this['change_mode'] = changeMode;
        return this;
    }
    public set changeMode(changeMode: PrepaidUpdateOptionChangeModeEnum | string  | undefined) {
        this['change_mode'] = changeMode;
    }
    public get changeMode(): PrepaidUpdateOptionChangeModeEnum | string | undefined {
        return this['change_mode'];
    }
    public withPeriodNum(periodNum: number): PrepaidUpdateOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodType(periodType: PrepaidUpdateOptionPeriodTypeEnum | string): PrepaidUpdateOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PrepaidUpdateOptionPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): PrepaidUpdateOptionPeriodTypeEnum | string | undefined {
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
