
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteKillLogicalProcessesResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ExecuteKillLogicalProcessesResponse {
        this['resp'] = resp;
        return this;
    }
}