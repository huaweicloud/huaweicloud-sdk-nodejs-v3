
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowChargeModesResponse extends SdkResponse {
    public result?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<{ [key: string]: object; }>): ShowChargeModesResponse {
        this['result'] = result;
        return this;
    }
}