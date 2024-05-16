
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckStarRocksResourceResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CheckStarRocksResourceResponse {
        this['result'] = result;
        return this;
    }
}