
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeOrderResponse extends SdkResponse {
    public orderId?: string;
    public retCode?: number;
    public retMsg?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): ChangeOrderResponse {
        this['orderId'] = orderId;
        return this;
    }
    public withRetCode(retCode: number): ChangeOrderResponse {
        this['retCode'] = retCode;
        return this;
    }
    public withRetMsg(retMsg: string): ChangeOrderResponse {
        this['retMsg'] = retMsg;
        return this;
    }
}