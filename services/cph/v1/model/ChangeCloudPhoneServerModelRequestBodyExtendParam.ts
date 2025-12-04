

export class ChangeCloudPhoneServerModelRequestBodyExtendParam {
    private 'is_auto_pay'?: number;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: number): ChangeCloudPhoneServerModelRequestBodyExtendParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
}