

export class PrepaidChangeChargeModeOption {
    private 'include_publicip'?: boolean;
    private 'publicip_ids'?: Array<string>;
    private 'period_type'?: PrepaidChangeChargeModeOptionPeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'auto_renew'?: boolean;
    private 'auto_pay'?: boolean;
    public constructor(periodType?: string) { 
        this['period_type'] = periodType;
    }
    public withIncludePublicip(includePublicip: boolean): PrepaidChangeChargeModeOption {
        this['include_publicip'] = includePublicip;
        return this;
    }
    public set includePublicip(includePublicip: boolean  | undefined) {
        this['include_publicip'] = includePublicip;
    }
    public get includePublicip(): boolean | undefined {
        return this['include_publicip'];
    }
    public withPublicipIds(publicipIds: Array<string>): PrepaidChangeChargeModeOption {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string>  | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds(): Array<string> | undefined {
        return this['publicip_ids'];
    }
    public withPeriodType(periodType: PrepaidChangeChargeModeOptionPeriodTypeEnum | string): PrepaidChangeChargeModeOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PrepaidChangeChargeModeOptionPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): PrepaidChangeChargeModeOptionPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PrepaidChangeChargeModeOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withAutoRenew(autoRenew: boolean): PrepaidChangeChargeModeOption {
        this['auto_renew'] = autoRenew;
        return this;
    }
    public set autoRenew(autoRenew: boolean  | undefined) {
        this['auto_renew'] = autoRenew;
    }
    public get autoRenew(): boolean | undefined {
        return this['auto_renew'];
    }
    public withAutoPay(autoPay: boolean): PrepaidChangeChargeModeOption {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean  | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay(): boolean | undefined {
        return this['auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrepaidChangeChargeModeOptionPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
