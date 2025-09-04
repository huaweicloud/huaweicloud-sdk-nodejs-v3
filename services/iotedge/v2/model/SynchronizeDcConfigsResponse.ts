
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SynchronizeDcConfigsResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): SynchronizeDcConfigsResponse {
        this['body'] = body;
        return this;
    }
}