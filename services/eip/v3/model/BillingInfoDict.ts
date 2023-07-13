

export class BillingInfoDict {
    private 'order_id'?: string | undefined;
    private 'product_id'?: string | undefined;
    public constructor() { 
    }
    public withOrderId(orderId: string): BillingInfoDict {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withProductId(productId: string): BillingInfoDict {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
}