
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecutePrivilegeDatabaseUserRoleResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ExecutePrivilegeDatabaseUserRoleResponse {
        this['resp'] = resp;
        return this;
    }
}