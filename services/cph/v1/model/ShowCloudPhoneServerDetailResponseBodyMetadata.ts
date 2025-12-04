

export class ShowCloudPhoneServerDetailResponseBodyMetadata {
    private 'charging_mode'?: number;
    private 'product_id'?: string;
    private 'order_id'?: string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: number): ShowCloudPhoneServerDetailResponseBodyMetadata {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withProductId(productId: string): ShowCloudPhoneServerDetailResponseBodyMetadata {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withOrderId(orderId: string): ShowCloudPhoneServerDetailResponseBodyMetadata {
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