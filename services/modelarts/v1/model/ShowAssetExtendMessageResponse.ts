
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetExtendMessageResponse extends SdkResponse {
    public body?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: object; }): ShowAssetExtendMessageResponse {
        this['body'] = body;
        return this;
    }
}