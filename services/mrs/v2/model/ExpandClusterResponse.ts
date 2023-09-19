
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandClusterResponse extends SdkResponse {
    public result?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ExpandClusterResponse {
        this['result'] = result;
        return this;
    }
    public withOrderId(orderId: string): ExpandClusterResponse {
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