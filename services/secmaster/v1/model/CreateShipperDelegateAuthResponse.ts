
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateShipperDelegateAuthResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): CreateShipperDelegateAuthResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): CreateShipperDelegateAuthResponse {
        this['msg'] = msg;
        return this;
    }
}