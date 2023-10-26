
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartPausingWorkflowExecutionsResponse extends SdkResponse {
    public result?: object;
    public constructor() { 
        super();
    }
    public withResult(result: object): StartPausingWorkflowExecutionsResponse {
        this['result'] = result;
        return this;
    }
}