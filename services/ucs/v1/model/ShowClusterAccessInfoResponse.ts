
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterAccessInfoResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ShowClusterAccessInfoResponse {
        this['body'] = body;
        return this;
    }
}