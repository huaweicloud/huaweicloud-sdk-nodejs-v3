

export class PeriodOrderResp {
    public status?: string;
    private 'order_id'?: string;
    private 'charging_mode'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'eff_time'?: string;
    private 'exp_time'?: string;
    public constructor() { 
    }
    public withStatus(status: string): PeriodOrderResp {
        this['status'] = status;
        return this;
    }
    public withOrderId(orderId: string): PeriodOrderResp {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withChargingMode(chargingMode: number): PeriodOrderResp {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: number): PeriodOrderResp {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PeriodOrderResp {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): PeriodOrderResp {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withEffTime(effTime: string): PeriodOrderResp {
        this['eff_time'] = effTime;
        return this;
    }
    public set effTime(effTime: string  | undefined) {
        this['eff_time'] = effTime;
    }
    public get effTime(): string | undefined {
        return this['eff_time'];
    }
    public withExpTime(expTime: string): PeriodOrderResp {
        this['exp_time'] = expTime;
        return this;
    }
    public set expTime(expTime: string  | undefined) {
        this['exp_time'] = expTime;
    }
    public get expTime(): string | undefined {
        return this['exp_time'];
    }
}