import { ResizeDesktopExtendParam } from './ResizeDesktopExtendParam';


export class ResizeDesktopPoolReq {
    private 'product_id'?: string;
    private 'order_id'?: string;
    public mode?: string;
    private 'extend_param'?: ResizeDesktopExtendParam;
    public constructor(productId?: string) { 
        this['product_id'] = productId;
    }
    public withProductId(productId: string): ResizeDesktopPoolReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withOrderId(orderId: string): ResizeDesktopPoolReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withMode(mode: string): ResizeDesktopPoolReq {
        this['mode'] = mode;
        return this;
    }
    public withExtendParam(extendParam: ResizeDesktopExtendParam): ResizeDesktopPoolReq {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: ResizeDesktopExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): ResizeDesktopExtendParam | undefined {
        return this['extend_param'];
    }
}