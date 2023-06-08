

export class ChangeServerChargeModePrepaidOption {
    private 'include_data_disks'?: boolean | undefined;
    private 'include_publicips'?: boolean | undefined;
    private 'period_type': string | undefined;
    private 'period_num': string | undefined;
    private 'auto_pay'?: boolean | undefined;
    private 'auto_renew'?: boolean | undefined;
    public constructor(periodType?: any, periodNum?: any) { 
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
    }
    public withIncludeDataDisks(includeDataDisks: boolean): ChangeServerChargeModePrepaidOption {
        this['include_data_disks'] = includeDataDisks;
        return this;
    }
    public set includeDataDisks(includeDataDisks: boolean | undefined) {
        this['include_data_disks'] = includeDataDisks;
    }
    public get includeDataDisks() {
        return this['include_data_disks'];
    }
    public withIncludePublicips(includePublicips: boolean): ChangeServerChargeModePrepaidOption {
        this['include_publicips'] = includePublicips;
        return this;
    }
    public set includePublicips(includePublicips: boolean | undefined) {
        this['include_publicips'] = includePublicips;
    }
    public get includePublicips() {
        return this['include_publicips'];
    }
    public withPeriodType(periodType: string): ChangeServerChargeModePrepaidOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: string): ChangeServerChargeModePrepaidOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: string | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
    public withAutoPay(autoPay: boolean): ChangeServerChargeModePrepaidOption {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay() {
        return this['auto_pay'];
    }
    public withAutoRenew(autoRenew: boolean): ChangeServerChargeModePrepaidOption {
        this['auto_renew'] = autoRenew;
        return this;
    }
    public set autoRenew(autoRenew: boolean | undefined) {
        this['auto_renew'] = autoRenew;
    }
    public get autoRenew() {
        return this['auto_renew'];
    }
}