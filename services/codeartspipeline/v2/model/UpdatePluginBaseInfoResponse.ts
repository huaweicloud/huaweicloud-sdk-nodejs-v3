
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePluginBaseInfoResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdatePluginBaseInfoResponse {
        this['body'] = body;
        return this;
    }
}