

export class ReqAllocateDehExtendParam {
    private 'charging_mode'?: string;
    private 'period_type'?: string;
    private 'period_num'?: number;
    private 'is_auto_pay'?: boolean;
    private 'is_auto_renew'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: string): ReqAllocateDehExtendParam {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: string): ReqAllocateDehExtendParam {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): ReqAllocateDehExtendParam {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoPay(isAutoPay: boolean): ReqAllocateDehExtendParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): ReqAllocateDehExtendParam {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ReqAllocateDehExtendParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}