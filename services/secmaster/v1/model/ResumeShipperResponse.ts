
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResumeShipperResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ResumeShipperResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ResumeShipperResponse {
        this['msg'] = msg;
        return this;
    }
}