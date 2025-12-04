

export class CreateCloudPhoneSingleServerRequestBodyOrderParam {
    private 'charging_mode'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_pay'?: number;
    private 'is_auto_renew'?: number;
    public constructor(chargingMode?: number, periodType?: number, periodNum?: number) { 
        this['charging_mode'] = chargingMode;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
    }
    public withChargingMode(chargingMode: number): CreateCloudPhoneSingleServerRequestBodyOrderParam {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: number): CreateCloudPhoneSingleServerRequestBodyOrderParam {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateCloudPhoneSingleServerRequestBodyOrderParam {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoPay(isAutoPay: number): CreateCloudPhoneSingleServerRequestBodyOrderParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateCloudPhoneSingleServerRequestBodyOrderParam {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
}