
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeInstanceOrderResponse extends SdkResponse {
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): ChangeInstanceOrderResponse {
        this['orderId'] = orderId;
        return this;
    }
}