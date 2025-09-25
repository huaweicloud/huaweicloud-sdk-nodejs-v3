
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFeatureResponse extends SdkResponse {
    public body?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: object; }): ShowFeatureResponse {
        this['body'] = body;
        return this;
    }
}