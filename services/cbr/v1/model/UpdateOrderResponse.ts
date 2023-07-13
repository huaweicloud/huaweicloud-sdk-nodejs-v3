
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOrderResponse extends SdkResponse {
    public orderId?: string;
    public retCode?: string;
    public retMsg?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): UpdateOrderResponse {
        this['orderId'] = orderId;
        return this;
    }
    public withRetCode(retCode: string): UpdateOrderResponse {
        this['retCode'] = retCode;
        return this;
    }
    public withRetMsg(retMsg: string): UpdateOrderResponse {
        this['retMsg'] = retMsg;
        return this;
    }
}