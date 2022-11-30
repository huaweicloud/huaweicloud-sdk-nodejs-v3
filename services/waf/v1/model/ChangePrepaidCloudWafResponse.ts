
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangePrepaidCloudWafResponse extends SdkResponse {
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): ChangePrepaidCloudWafResponse {
        this['orderId'] = orderId;
        return this;
    }
}