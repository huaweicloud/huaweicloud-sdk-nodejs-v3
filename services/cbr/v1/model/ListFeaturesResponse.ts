
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeaturesResponse extends SdkResponse {
    public body?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: object; }): ListFeaturesResponse {
        this['body'] = body;
        return this;
    }
}