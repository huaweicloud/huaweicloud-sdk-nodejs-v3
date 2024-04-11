

export class ResizeFlavorObject {
    private 'spec_code'?: string;
    private 'is_auto_pay'?: boolean;
    private 'is_delay'?: boolean;
    public constructor(specCode?: string) { 
        this['spec_code'] = specCode;
    }
    public withSpecCode(specCode: string): ResizeFlavorObject {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withIsAutoPay(isAutoPay: boolean): ResizeFlavorObject {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withIsDelay(isDelay: boolean): ResizeFlavorObject {
        this['is_delay'] = isDelay;
        return this;
    }
    public set isDelay(isDelay: boolean  | undefined) {
        this['is_delay'] = isDelay;
    }
    public get isDelay(): boolean | undefined {
        return this['is_delay'];
    }
}