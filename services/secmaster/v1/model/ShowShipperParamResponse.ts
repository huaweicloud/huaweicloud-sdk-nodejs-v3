
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShipperParamResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ShowShipperParamResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ShowShipperParamResponse {
        this['msg'] = msg;
        return this;
    }
}