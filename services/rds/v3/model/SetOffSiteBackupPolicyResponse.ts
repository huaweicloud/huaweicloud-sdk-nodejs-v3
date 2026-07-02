
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetOffSiteBackupPolicyResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): SetOffSiteBackupPolicyResponse {
        this['resp'] = resp;
        return this;
    }
}