
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrderStatusResponse extends SdkResponse {
    public resCode?: string;
    public resMsg?: string;
    public result?: object;
    public constructor() { 
        super();
    }
    public withResCode(resCode: string): ShowOrderStatusResponse {
        this['resCode'] = resCode;
        return this;
    }
    public withResMsg(resMsg: string): ShowOrderStatusResponse {
        this['resMsg'] = resMsg;
        return this;
    }
    public withResult(result: object): ShowOrderStatusResponse {
        this['result'] = result;
        return this;
    }
}