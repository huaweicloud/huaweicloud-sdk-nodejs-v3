
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrepaidCloudWafResponse extends SdkResponse {
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreatePrepaidCloudWafResponse {
        this['orderId'] = orderId;
        return this;
    }
}