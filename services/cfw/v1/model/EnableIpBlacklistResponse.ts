
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableIpBlacklistResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): EnableIpBlacklistResponse {
        this['body'] = body;
        return this;
    }
}