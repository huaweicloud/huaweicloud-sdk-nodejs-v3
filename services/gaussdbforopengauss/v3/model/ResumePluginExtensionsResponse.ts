
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResumePluginExtensionsResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ResumePluginExtensionsResponse {
        this['body'] = body;
        return this;
    }
}