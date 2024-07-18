

export class BssParam2 {
    private 'is_auto_pay'?: boolean;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: boolean): BssParam2 {
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