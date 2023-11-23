
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCloudTypeResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ShowCloudTypeResponse {
        this['body'] = body;
        return this;
    }
}