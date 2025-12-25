
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryShipperResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withCode(code: number): RetryShipperResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): RetryShipperResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: Array<string>): RetryShipperResponse {
        this['data'] = data;
        return this;
    }
}