

export class ExpandVolumeReq {
    private 'order_id'?: string;
    private 'new_size'?: number;
    public constructor(newSize?: number) { 
        this['new_size'] = newSize;
    }
    public withOrderId(orderId: string): ExpandVolumeReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withNewSize(newSize: number): ExpandVolumeReq {
        this['new_size'] = newSize;
        return this;
    }
    public set newSize(newSize: number  | undefined) {
        this['new_size'] = newSize;
    }
    public get newSize(): number | undefined {
        return this['new_size'];
    }
}