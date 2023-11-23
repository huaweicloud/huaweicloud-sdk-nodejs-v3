
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBucketListResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ShowBucketListResponse {
        this['body'] = body;
        return this;
    }
}