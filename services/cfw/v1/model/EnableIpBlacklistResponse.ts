
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableIpBlacklistResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): EnableIpBlacklistResponse {
        this['body'] = body;
        return this;
    }
}