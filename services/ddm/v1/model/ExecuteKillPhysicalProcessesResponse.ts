
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteKillPhysicalProcessesResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ExecuteKillPhysicalProcessesResponse {
        this['resp'] = resp;
        return this;
    }
}