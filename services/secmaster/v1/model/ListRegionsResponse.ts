
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): ListRegionsResponse {
        this['data'] = data;
        return this;
    }
}