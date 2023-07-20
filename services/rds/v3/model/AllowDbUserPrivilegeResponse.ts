
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AllowDbUserPrivilegeResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): AllowDbUserPrivilegeResponse {
        this['resp'] = resp;
        return this;
    }
}