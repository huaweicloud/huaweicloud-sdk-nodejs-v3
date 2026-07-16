
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkflowServiceAuthResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateWorkflowServiceAuthResponse {
        this['result'] = result;
        return this;
    }
}