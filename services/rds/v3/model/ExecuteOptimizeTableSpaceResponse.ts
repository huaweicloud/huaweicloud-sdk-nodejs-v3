
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteOptimizeTableSpaceResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ExecuteOptimizeTableSpaceResponse {
        this['resp'] = resp;
        return this;
    }
}