
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDbEncryptInstancePeriodResponse extends SdkResponse {
    public code?: string;
    public description?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateDbEncryptInstancePeriodResponse {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): CreateDbEncryptInstancePeriodResponse {
        this['description'] = description;
        return this;
    }
    public withOrderId(orderId: string): CreateDbEncryptInstancePeriodResponse {
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