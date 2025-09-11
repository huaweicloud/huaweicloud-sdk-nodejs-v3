
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDbOmInstancePeriodResponse extends SdkResponse {
    public code?: string;
    public description?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateDbOmInstancePeriodResponse {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): CreateDbOmInstancePeriodResponse {
        this['description'] = description;
        return this;
    }
    public withOrderId(orderId: string): CreateDbOmInstancePeriodResponse {
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