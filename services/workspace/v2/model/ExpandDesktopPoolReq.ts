

export class ExpandDesktopPoolReq {
    public size?: number;
    private 'order_id'?: string;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): ExpandDesktopPoolReq {
        this['size'] = size;
        return this;
    }
    public withOrderId(orderId: string): ExpandDesktopPoolReq {
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