

export class ShowOrderRequest {
    private 'order_name'?: string;
    public constructor(orderName?: string) { 
        this['order_name'] = orderName;
    }
    public withOrderName(orderName: string): ShowOrderRequest {
        this['order_name'] = orderName;
        return this;
    }
    public set orderName(orderName: string  | undefined) {
        this['order_name'] = orderName;
    }
    public get orderName(): string | undefined {
        return this['order_name'];
    }
}