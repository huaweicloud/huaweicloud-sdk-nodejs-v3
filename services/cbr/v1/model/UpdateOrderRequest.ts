import { CbcUpdate } from './CbcUpdate';


export class UpdateOrderRequest {
    private 'order_id': string | undefined;
    public body?: CbcUpdate;
    public constructor(orderId?: any) { 
        this['order_id'] = orderId;
    }
    public withOrderId(orderId: string): UpdateOrderRequest {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withBody(body: CbcUpdate): UpdateOrderRequest {
        this['body'] = body;
        return this;
    }
}