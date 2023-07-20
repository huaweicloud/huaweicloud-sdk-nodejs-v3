
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RevokeSqlserverDbUserPrivilegeResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): RevokeSqlserverDbUserPrivilegeResponse {
        this['resp'] = resp;
        return this;
    }
}