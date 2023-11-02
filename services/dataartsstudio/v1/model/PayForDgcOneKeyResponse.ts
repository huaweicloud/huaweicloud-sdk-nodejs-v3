
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PayForDgcOneKeyResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'resource_id'?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): PayForDgcOneKeyResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withResourceId(resourceId: string): PayForDgcOneKeyResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}