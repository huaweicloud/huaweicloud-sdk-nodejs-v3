
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShipperDelegateAuthResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ShowShipperDelegateAuthResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ShowShipperDelegateAuthResponse {
        this['msg'] = msg;
        return this;
    }
}