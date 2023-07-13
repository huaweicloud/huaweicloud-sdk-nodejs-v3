
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountEipAvailableResourcesResponse extends SdkResponse {
    public result?: number;
    public constructor() { 
        super();
    }
    public withResult(result: number): CountEipAvailableResourcesResponse {
        this['result'] = result;
        return this;
    }
}