
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryIpBlacklistResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): RetryIpBlacklistResponse {
        this['body'] = body;
        return this;
    }
}