
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class HandleShipperAuthorizationResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): HandleShipperAuthorizationResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): HandleShipperAuthorizationResponse {
        this['msg'] = msg;
        return this;
    }
}