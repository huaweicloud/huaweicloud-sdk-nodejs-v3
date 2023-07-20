

export class AddReadonlyNodeRequestBody {
    private 'spec_code'?: string;
    public num?: number;
    public delay?: number;
    private 'is_auto_pay'?: boolean;
    public constructor(specCode?: string, num?: number) { 
        this['spec_code'] = specCode;
        this['num'] = num;
    }
    public withSpecCode(specCode: string): AddReadonlyNodeRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNum(num: number): AddReadonlyNodeRequestBody {
        this['num'] = num;
        return this;
    }
    public withDelay(delay: number): AddReadonlyNodeRequestBody {
        this['delay'] = delay;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): AddReadonlyNodeRequestBody {
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