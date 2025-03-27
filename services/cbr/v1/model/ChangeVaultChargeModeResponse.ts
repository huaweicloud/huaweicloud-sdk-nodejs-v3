
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeVaultChargeModeResponse extends SdkResponse {
    public orderId?: string;
    public retCode?: number;
    public retMsg?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): ChangeVaultChargeModeResponse {
        this['orderId'] = orderId;
        return this;
    }
    public withRetCode(retCode: number): ChangeVaultChargeModeResponse {
        this['retCode'] = retCode;
        return this;
    }
    public withRetMsg(retMsg: string): ChangeVaultChargeModeResponse {
        this['retMsg'] = retMsg;
        return this;
    }
}