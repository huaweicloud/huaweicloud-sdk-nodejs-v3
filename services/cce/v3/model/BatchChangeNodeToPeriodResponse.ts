
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchChangeNodeToPeriodResponse extends SdkResponse {
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): BatchChangeNodeToPeriodResponse {
        this['orderId'] = orderId;
        return this;
    }
}