
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryShipperAuthorizationResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withCode(code: number): RetryShipperAuthorizationResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): RetryShipperAuthorizationResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: Array<string>): RetryShipperAuthorizationResponse {
        this['data'] = data;
        return this;
    }
}