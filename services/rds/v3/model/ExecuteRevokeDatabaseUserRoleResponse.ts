
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteRevokeDatabaseUserRoleResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ExecuteRevokeDatabaseUserRoleResponse {
        this['resp'] = resp;
        return this;
    }
}