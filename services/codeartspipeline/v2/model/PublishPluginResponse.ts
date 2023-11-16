
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishPluginResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): PublishPluginResponse {
        this['body'] = body;
        return this;
    }
}