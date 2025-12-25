
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PauseShipperResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): PauseShipperResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): PauseShipperResponse {
        this['msg'] = msg;
        return this;
    }
}