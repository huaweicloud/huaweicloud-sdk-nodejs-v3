import { ResizeDesktopData } from './ResizeDesktopData';
import { ResizeDesktopExtendParam } from './ResizeDesktopExtendParam';


export class ResizeDesktopReq {
    public desktops?: Array<ResizeDesktopData>;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public mode?: string;
    private 'dedicated_host_id'?: string;
    private 'order_id'?: string;
    private 'extend_param'?: ResizeDesktopExtendParam;
    public constructor(desktops?: Array<ResizeDesktopData>, productId?: string, mode?: string) { 
        this['desktops'] = desktops;
        this['product_id'] = productId;
        this['mode'] = mode;
    }
    public withDesktops(desktops: Array<ResizeDesktopData>): ResizeDesktopReq {
        this['desktops'] = desktops;
        return this;
    }
    public withProductId(productId: string): ResizeDesktopReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): ResizeDesktopReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withMode(mode: string): ResizeDesktopReq {
        this['mode'] = mode;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): ResizeDesktopReq {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withOrderId(orderId: string): ResizeDesktopReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withExtendParam(extendParam: ResizeDesktopExtendParam): ResizeDesktopReq {
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