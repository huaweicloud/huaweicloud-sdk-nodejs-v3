

export class OpenGaussResizeRequestBody {
    private 'flavor_ref'?: string;
    private 'is_auto_pay'?: boolean;
    private 'cn_concurrent_resize_num'?: number;
    private 'dn_concurrent_resize_num'?: number;
    public constructor(flavorRef?: string) { 
        this['flavor_ref'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): OpenGaussResizeRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withIsAutoPay(isAutoPay: boolean): OpenGaussResizeRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withCnConcurrentResizeNum(cnConcurrentResizeNum: number): OpenGaussResizeRequestBody {
        this['cn_concurrent_resize_num'] = cnConcurrentResizeNum;
        return this;
    }
    public set cnConcurrentResizeNum(cnConcurrentResizeNum: number  | undefined) {
        this['cn_concurrent_resize_num'] = cnConcurrentResizeNum;
    }
    public get cnConcurrentResizeNum(): number | undefined {
        return this['cn_concurrent_resize_num'];
    }
    public withDnConcurrentResizeNum(dnConcurrentResizeNum: number): OpenGaussResizeRequestBody {
        this['dn_concurrent_resize_num'] = dnConcurrentResizeNum;
        return this;
    }
    public set dnConcurrentResizeNum(dnConcurrentResizeNum: number  | undefined) {
        this['dn_concurrent_resize_num'] = dnConcurrentResizeNum;
    }
    public get dnConcurrentResizeNum(): number | undefined {
        return this['dn_concurrent_resize_num'];
    }
}