
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAutoUpgradePolicyResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): SetAutoUpgradePolicyResponse {
        this['resp'] = resp;
        return this;
    }
}