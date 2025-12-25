
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateShipperResponse extends SdkResponse {
    public code?: number;
    public data?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): CreateShipperResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: number): CreateShipperResponse {
        this['data'] = data;
        return this;
    }
    public withMsg(msg: string): CreateShipperResponse {
        this['msg'] = msg;
        return this;
    }
}