
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTtsPhoneticSymbolResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): ShowTtsPhoneticSymbolResponse {
        this['data'] = data;
        return this;
    }
}