
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetBinlogClearPolicyResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): SetBinlogClearPolicyResponse {
        this['resp'] = resp;
        return this;
    }
}