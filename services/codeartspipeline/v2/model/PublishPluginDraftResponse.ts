
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishPluginDraftResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): PublishPluginDraftResponse {
        this['body'] = body;
        return this;
    }
}