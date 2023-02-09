
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainStatsResponse extends SdkResponse {
    public result?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withResult(result: { [key: string]: object; }): ShowDomainStatsResponse {
        this['result'] = result;
        return this;
    }
}