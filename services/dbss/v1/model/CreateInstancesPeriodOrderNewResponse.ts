
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstancesPeriodOrderNewResponse extends SdkResponse {
    public description?: string;
    public code?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withDescription(description: string): CreateInstancesPeriodOrderNewResponse {
        this['description'] = description;
        return this;
    }
    public withCode(code: string): CreateInstancesPeriodOrderNewResponse {
        this['code'] = code;
        return this;
    }
    public withOrderId(orderId: string): CreateInstancesPeriodOrderNewResponse {
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