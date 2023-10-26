
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteCommandMobilizationResponse extends SdkResponse {
    public response?: string;
    public constructor() { 
        super();
    }
    public withResponse(response: string): ExecuteCommandMobilizationResponse {
        this['response'] = response;
        return this;
    }
}