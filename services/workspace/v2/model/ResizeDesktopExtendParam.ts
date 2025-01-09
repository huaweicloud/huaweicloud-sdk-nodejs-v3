

export class ResizeDesktopExtendParam {
    private 'is_auto_pay'?: string;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: string): ResizeDesktopExtendParam {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}