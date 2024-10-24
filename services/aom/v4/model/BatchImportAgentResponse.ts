
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchImportAgentResponse extends SdkResponse {
    public state?: boolean;
    public constructor() { 
        super();
    }
    public withState(state: boolean): BatchImportAgentResponse {
        this['state'] = state;
        return this;
    }
}