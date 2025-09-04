
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateJobRolePermissionResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchUpdateJobRolePermissionResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): BatchUpdateJobRolePermissionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): BatchUpdateJobRolePermissionResponse {
        this['result'] = result;
        return this;
    }
}