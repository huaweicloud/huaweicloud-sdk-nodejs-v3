import { PayMode } from './PayMode';


export class PrepaidOptions {
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'pay_mode'?: PayMode;
    public constructor() { 
    }
    public withOrderId(orderId: string): PrepaidOptions {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProductId(productId: string): PrepaidOptions {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withPayMode(payMode: PayMode): PrepaidOptions {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: PayMode  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): PayMode | undefined {
        return this['pay_mode'];
    }
}