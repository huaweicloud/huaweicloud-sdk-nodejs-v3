

export class UpdatePrePaidBandwidthExtendParamOption {
    private 'is_auto_pay'?: boolean;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: boolean): UpdatePrePaidBandwidthExtendParamOption {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
}