
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreRedistributionResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): RestoreRedistributionResponse {
        this['body'] = body;
        return this;
    }
}