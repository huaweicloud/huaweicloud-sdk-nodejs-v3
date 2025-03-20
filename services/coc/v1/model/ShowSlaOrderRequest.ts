

export class ShowSlaOrderRequest {
    private 'order_id'?: string;
    public constructor(orderId?: string) { 
        this['order_id'] = orderId;
    }
    public withOrderId(orderId: string): ShowSlaOrderRequest {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}