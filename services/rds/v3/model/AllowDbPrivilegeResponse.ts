
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AllowDbPrivilegeResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): AllowDbPrivilegeResponse {
        this['resp'] = resp;
        return this;
    }
}