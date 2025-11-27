
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryClusterActivationResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): RetryClusterActivationResponse {
        this['body'] = body;
        return this;
    }
}