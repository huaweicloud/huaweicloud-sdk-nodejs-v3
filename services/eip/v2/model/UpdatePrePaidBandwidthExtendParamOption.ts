

export class UpdatePrePaidBandwidthExtendParamOption {
    private 'is_auto_pay'?: boolean | undefined;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: boolean): UpdatePrePaidBandwidthExtendParamOption {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
        return this['is_auto_pay'];
    }
}