
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostPrivilegeResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): UpdateHostPrivilegeResponse {
        this['resp'] = resp;
        return this;
    }
}