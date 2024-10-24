
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateAgentResponse extends SdkResponse {
    public state?: boolean;
    public constructor() { 
        super();
    }
    public withState(state: boolean): BatchUpdateAgentResponse {
        this['state'] = state;
        return this;
    }
}