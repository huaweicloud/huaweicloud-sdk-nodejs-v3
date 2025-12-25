
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteShipperResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): DeleteShipperResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): DeleteShipperResponse {
        this['msg'] = msg;
        return this;
    }
}