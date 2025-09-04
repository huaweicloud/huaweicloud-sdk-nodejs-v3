
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetHarmonySoftBusKeyResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ResetHarmonySoftBusKeyResponse {
        this['body'] = body;
        return this;
    }
}