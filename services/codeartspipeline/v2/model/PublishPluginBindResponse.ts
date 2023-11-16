
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishPluginBindResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): PublishPluginBindResponse {
        this['body'] = body;
        return this;
    }
}