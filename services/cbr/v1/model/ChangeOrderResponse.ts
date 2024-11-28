
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeOrderResponse extends SdkResponse {
    public orderId?: string;
    public retCode?: string;
    public retMsg?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): ChangeOrderResponse {
        this['orderId'] = orderId;
        return this;
    }
    public withRetCode(retCode: string): ChangeOrderResponse {
        this['retCode'] = retCode;
        return this;
    }
    public withRetMsg(retMsg: string): ChangeOrderResponse {
        this['retMsg'] = retMsg;
        return this;
    }
}