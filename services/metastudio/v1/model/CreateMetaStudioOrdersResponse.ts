
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMetaStudioOrdersResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateMetaStudioOrdersResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withXRequestId(xRequestId: string): CreateMetaStudioOrdersResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}