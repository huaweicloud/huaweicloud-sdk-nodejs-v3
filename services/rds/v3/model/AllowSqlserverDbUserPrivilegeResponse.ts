
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AllowSqlserverDbUserPrivilegeResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): AllowSqlserverDbUserPrivilegeResponse {
        this['resp'] = resp;
        return this;
    }
}