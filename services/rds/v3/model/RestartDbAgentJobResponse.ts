
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartDbAgentJobResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): RestartDbAgentJobResponse {
        this['resp'] = resp;
        return this;
    }
}