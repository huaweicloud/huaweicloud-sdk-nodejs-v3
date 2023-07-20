

export class OpenGaussResizeRequest {
    private 'flavor_ref'?: string;
    private 'is_auto_pay'?: boolean;
    public constructor(flavorRef?: string) { 
        this['flavor_ref'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): OpenGaussResizeRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withIsAutoPay(isAutoPay: boolean): OpenGaussResizeRequest {
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