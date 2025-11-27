
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncResourceAgentResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): SyncResourceAgentResponse {
        this['data'] = data;
        return this;
    }
}