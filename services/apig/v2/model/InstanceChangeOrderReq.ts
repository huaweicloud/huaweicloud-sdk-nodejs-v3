import { ResizeInstanceReq } from './ResizeInstanceReq';


export class InstanceChangeOrderReq {
    private 'instance_id'?: string;
    private 'product_id'?: string;
    private 'resize_info'?: ResizeInstanceReq;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceChangeOrderReq {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProductId(productId: string): InstanceChangeOrderReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withResizeInfo(resizeInfo: ResizeInstanceReq): InstanceChangeOrderReq {
        this['resize_info'] = resizeInfo;
        return this;
    }
    public set resizeInfo(resizeInfo: ResizeInstanceReq  | undefined) {
        this['resize_info'] = resizeInfo;
    }
    public get resizeInfo(): ResizeInstanceReq | undefined {
        return this['resize_info'];
    }
}